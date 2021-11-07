import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { cleanSingleUser } from '../../store/actions/adminUserAction';
import dataservice from '../../service/dataservice';
import { PENDING_PET_STORE,
    APPROVE_TEXT,
    DECLINE_TEXT,
    GOOD_DAY,
    THANK_YOU
} from '../../constants'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

function SinglePendingPetStore(props) {

    const history = useHistory();
    const { user } = props;

    const [showModalDecline, setShowModalDecline] = useState(false);
    const [showDecline, setShowDecline] = useState(false);
    const handleCloseDecline = () => setShowDecline(false);
    const handleShowDecline = () => setShowDecline(true);

    let recipient = dataservice.validPhoneNo (String (user.phoneNo));
    let approveText = GOOD_DAY + user.name + APPROVE_TEXT + user.userType + THANK_YOU;
    let declineText = GOOD_DAY + user.name + DECLINE_TEXT + user.userType + THANK_YOU;

    const backClick = () => {
        cleanSingleUser();
        history.push('/PetStore');
    }

    const handleApprove = () => {
        saveUser();

        let textmessage = approveText;
        fetch(`http://127.0.0.1:4000/send-text?recipient=${recipient}&textmessage=${textmessage}&email=${user.email}`)
            .catch(err => console.error(err))

        toast.success('Successfully Approved ' + user.name + ' as a ' + user.userType);
        cleanSingleUser();
        history.push('/PetStore');
    }

    const saveUser = () => {
        var data1 = {
            uid: user.uid,
            email: user.email,
            name: user.name,
            address: user.address,
            phoneNo: user.phoneNo,
            userType: user.userType,
            imgProfile: user.imgProfile,
            ratings: "0"
        };
        var data2 = {
            checkStatus: "Offline",
            imgProfile: user.imgProfile,
            name: user.name,
            uid: user.uid,
            userType: user.userType,
        };
    
        dataservice.addUserDetails(PENDING_PET_STORE, data1)
          .then(() => {
                dataservice.addInAllUsersTBL(data2);
                deleteUser();
          })
          .catch(e => {
            console.log(e);
          });
      };

    const toggleTrueFalseDecline = () => {
        setShowModalDecline(handleShowDecline);
    };

    const declineUser = () =>{
        deleteUser();

        let textmessage = declineText;
        fetch(`http://127.0.0.1:4000/send-text?recipient=${recipient}&textmessage=${textmessage}&email=${user.email}`)
        .catch(err => console.error(err))


        toast.error('You Decline ' + user.name + ' as a ' + user.userType);
        handleCloseDecline();
        cleanSingleUser();
        history.push('/PetStore');
    }

    const deleteUser = () => {
        dataservice.removeUser( PENDING_PET_STORE, user.uid)
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

    return (
        <div className = "container">
            <div className = 'row gutters-sm mt-3'>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src= {user.imgProfile} alt="Profile Pic" className="rounded-circle" width="150"/>
                                <div className="mt-3">
                                    <h4>{ user.name } </h4>
                                    <p className="text-secondary mb-1"> {user.userType} </p>
                                    <p className="text-muted font-size-sm"> { user.address } </p>
            
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
                                    <button type = "button" className="btn btn-success btn-space" onClick = { handleApprove }>Approve</button>
                                    <button type = "button" className="btn btn-danger" onClick = { toggleTrueFalseDecline }>Decline</button>                                 
                                    <button type = "button" className="btn btn-primary float-end" onClick = { backClick }> Back </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default connect ( mapStateToProps, mapDispatchToProps) (SinglePendingPetStore)
