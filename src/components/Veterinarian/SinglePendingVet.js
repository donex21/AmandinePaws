import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { cleanSingleUser } from '../../store/actions/adminUserAction';
import { PENDING_VET } from '../../constants';
import dataservice from '../../service/dataservice';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

function SinglePendingVet(props) {

    const history = useHistory();
    const { user } = props;

    const [certVImages, setCertVImages] = useState([]);

    const [modalInfo, setModalInfo] = useState();
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showModalDecline, setShowModalDecline] = useState(false);
    const [showDecline, setShowDecline] = useState(false);
    const handleCloseDecline = () => setShowDecline(false);
    const handleShowDecline = () => setShowDecline(true);

    const backClick = () => {
        cleanSingleUser();
        history.push('/Veterinarian');
    }

    const handleApprove = () => {
        saveUser();
        toast.success('Successfully Approved ' + user.firstname + ' ' +  user.lastname + ' as a ' + user.userType);
        cleanSingleUser();
        history.push('/Veterinarian');
    }

    const saveUser = () => {
        var data1 = {
            uid: user.uid,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            address: user.address,
            gender: user.gender,
            phoneNo: user.phoneNo,
            userType: user.userType,
            imgProfile: user.imgProfile,
            ratings: "0"
        };
        var data2 = {
            checkStatus: "Offline",
            imgProfile: user.imgProfile,
            name: user.firstname + ' ' + user.lastname,
            uid: user.uid,
            userType: user.userType,
        };
    
        dataservice.addUserDetails(PENDING_VET, data1)
          .then(() => {
            dataservice.addInAllUsersTBL(data2);
            dataservice.addUserCert(user.uid, certVImages);
            deleteUser();
          })
          .catch(e => {
            console.log(e);
        });
      };

    const toggleTrueFalse = () => {
        setShowModal(handleShow);
    };

    const toggleTrueFalseDecline = () => {
        setShowModalDecline(handleShowDecline);
    };

    // firebase callback function
    const onDataChangedimage = ( items ) => {
        let image = [];
    
        items.forEach(( item ) => {
          let data = item.val();
          image.push(data);
        });
    
        setCertVImages( image );
    };

    useEffect(() => {
        dataservice.getUserCert( PENDING_VET, user.uid ).on("value", onDataChangedimage);
        return () => {
            dataservice.getUserCert( PENDING_VET, user.uid ).off("value", onDataChangedimage);
        };
      }, []);

    const declineUser = () =>{
        deleteUser();
        toast.error('You Decline ' + user.firstname + ' ' +  user.lastname + ' as a ' + user.userType);
        handleCloseDecline();
        cleanSingleUser();
        history.push('/Veterinarian');
    }

    const deleteUser = () => {
        dataservice.removeUser( PENDING_VET, user.uid)
          .then(() => {
            props.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
      };

    const ModalDecline = () =>{
        return (
            <Modal show = {showDecline} onHide ={handleCloseDecline}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Are you sure want to Decline?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={4}>
                            <Button variant = "danger" onClick = { declineUser }>
                                Yes
                            </Button>
                        </Col>
                        <Col md={{ span: 4, offset: 4 }}>
                            <Button variant = "primary" className = 'float-end' onClick = {handleCloseDecline}>
                                No
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
       )
    }

    const ModalContent = () =>{
        return (
            <Modal show = {show} onHide ={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalInfo.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className = "d-flex justify-content-center">
                    { certVImages.map((img, index) =>{
                            return ( <Row key = {index}>
                                <Col md={12}>
                                    <img src={img} alt="Admin" className="rounded-2" width="500" height = "500" />
                                </Col>
                            </Row>)
                            }) }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant = "secondary" onClick = {handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
       )
    }
    return (
        <div className = "container">
            <div className = 'row gutters-sm mt-3'>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src= {user.imgProfile} alt="Profile Pic" className="rounded-circle" width="150"/>
                                <div className="mt-3">
                                    <h4>{user.firstname +' '+ user.lastname}</h4>
                                    <p className="text-secondary mb-1"> {user.userType} </p>
                                    <p className="text-muted font-size-sm"> { user.address } </p>
                                    <button 
                                    className="btn btn-primary"
                                    onClick = {() =>{setModalInfo({
                                            title: 'Certificate',
                                        });
                                        toggleTrueFalse();
                                    }}
                                    >
                                        Certificate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = 'col-md-8'>
                    <div className = 'card mb-3'>
                        <div className = 'card-body'>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">First Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    { user.firstname } 
                                </div>
                            </div>
                            <hr/>

                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Last Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    { user.lastname }
                                </div>
                            </div>
                            <hr/>

                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Email</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    { user.email }
                                </div>
                            </div>
                            <hr/>

                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Gender</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                   { user.gender }
                                </div>
                            </div>
                            <hr/>

                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Contact Number</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    { user.phoneNo }
                                </div>
                            </div>
                            <hr/>

                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Address</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    { user.address }
                                </div>
                            </div>
                            <hr/>

                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">User Type</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    { user.userType }
                                </div>
                            </div>
                            <hr/>

                            <div className="row">
                                <div className="col-sm-12">                                  
                                    <button type = "button" className="btn btn-success btn-space" onClick = { handleApprove }>Approve</button>
                                    <button type = "button" className="btn btn-danger" onClick = { toggleTrueFalseDecline }>Decline</button>                                 
                                    <button type = "button" className="btn btn-primary float-end" onClick = { backClick }> Back </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {show ? <ModalContent/> : null}
                {showDecline ? <ModalDecline/> : null}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        user: state.adminuser.user
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        cleanSingleUser: () => dispatch(cleanSingleUser()),
    }
}

export default connect( mapStateToProps, mapDispatchToProps ) ( SinglePendingVet )
