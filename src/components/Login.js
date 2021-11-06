import React, { useState } from 'react';
import { connect } from 'react-redux';
import {signInAuth} from '../store/actions/adminUserAction';
import { Redirect } from 'react-router-dom'

function Login(props) {

    const{ auth, userError } = props

    const [userEmailPwd, setUserEmailPwd] = useState(
        {
            userEmail: '',
            userPassword: ''
        }
    );

    const handleOnchange = (e) =>{
        setUserEmailPwd({...userEmailPwd, [e.target.name]: e.target.value })
    }   

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signInAuth(userEmailPwd);
    }

    if (auth.uid){
        return <Redirect to='/Home'/>
    }

    return (
        <div className = "login-main">
             <div className = "login-section">
                <div className = "Com-Title"> 
                    <h2>Amandine Paws</h2>
                </div>
                <form className = "loginForm" onSubmit = {handleSubmit}>
                    <input type="text" 
                        placeholder="Email" 
                        required
                        name="userEmail"
                        value = {userEmailPwd.userEmail}
                        onChange = {handleOnchange}
                    />      
    
                    <input type="password" 
                        placeholder="Password" 
                        required
                        name="userPassword" 
                        value = {userEmailPwd.userPassword}
                        onChange = {handleOnchange}
                    />   
                    <div className = "Errormessage">
                        { userError ? <span> {userError} </span> : <span> </span> }
                    </div>  
                    
                    <button type="submit">SIGN IN</button>
                </form>
                
             </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userError: state.adminuser.userError,
        auth: state.firebase.auth
    };
  };

const mapDispatchToProps = (dispatch) =>{
    return{
        signInAuth: (userEmailPwd) => dispatch(signInAuth(userEmailPwd))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)