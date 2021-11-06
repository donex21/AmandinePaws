import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { cleanSingleUser } from '../../store/actions/adminUserAction';
import dataservice from '../../service/dataservice';

function SingleApprovedBoarding(props) {

    const history = useHistory();
    const { user } = props;

    const [certImages, setCertImages] = useState([]);

    const [modalInfo, setModalInfo] = useState();
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const backClick = () => {
        cleanSingleUser();
        history.push('/PetBoarding');
    }

    // firebase callback function
    const onDataChangedimage = ( items ) => {
        let image = [];
    
        items.forEach(( item ) => {
          let data = item.val();
          image.push(data);
        });
    
        setCertImages( image );
    };

    useEffect(() => {
        dataservice.getApprovedUserCert( user.uid ).on("value", onDataChangedimage);
    
        return () => {
            dataservice.getApprovedUserCert( user.uid ).off("value", onDataChangedimage);
        };
      }, []);

    const toggleTrueFalse = () => {
        setShowModal(handleShow);
    };

    const ModalContent = () =>{
        return (
            <Modal show = {show} onHide ={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalInfo.title}
                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body className = "d-flex justify-content-center searchEntryItems">
                        { certImages.map((img, index) =>{
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
                                    <h4>{user.name}</h4>
                                    <p className="text-secondary mb-1"> {user.userType} </p>
                                    <p className="text-muted font-size-sm"> { user.address } </p>
                                    <h4>Rating: { user.ratings } </h4>
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
                                    <h6 className="mb-0">Business Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    { user.name }  
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
                                    <button type = "button" className="btn btn-primary float-end" onClick = { backClick }> Back </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {show ? <ModalContent/> : null}
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


export default connect ( mapStateToProps, mapDispatchToProps) (SingleApprovedBoarding)
