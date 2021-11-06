import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { cleanSingleUser } from '../../store/actions/adminUserAction';

function SinglePetOwner(props) {

    const history = useHistory();
    const { user } = props;

    const backClick = () => {
        cleanSingleUser();
        history.push('/PetOwner');
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
                                    <h4>{ user.firstname +' '+ user.lastname }</h4>
                                    <p className="text-secondary mb-1"> { user.userType } </p>
                                    <p className="text-muted font-size-sm">  {user.address} </p>
                                    
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
                                    <button type = "button" className="btn btn-primary float-end" onClick = { backClick }> Back </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default connect (mapStateToProps, mapDispatchToProps) (SinglePetOwner)
