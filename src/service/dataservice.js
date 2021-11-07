import firebase from '../config/fbconfig';
import {
     PENDING_PET_BOARDING, 
     PENDING_PET_STORE,
     PENDING_VET,
     APPROVED_PET_BOARDING,
     APPROVED_PET_STORE,
     APPROVED_VET,
     PET_OWNER,
     PENDING_PET_BOARDING_TABLE,
     PENDING_PET_STORE_TABLE,
     PENDING_VET_TABLE,
     PET_OWNER_TABLE,
     APPROVED_PET_BOARDING_TABLE,
     APPROVED_PET_STORE_TABLE,
     APPROVED_VET_TABLE,
     ALLUSERS,
     SLASH,
     CERTIFICATE,
     CERT,
} from '../constants'

// Admin Logout
const logout = () =>{
    firebase.auth().signOut();
}

// Firebase user Authentication
const auth = ( email, pwd ) => {
    return firebase.auth().signInWithEmailAndPassword(email, pwd);
}

// Get all data base in user type
const getAll = ( usertype ) =>{
    if ( usertype ===  PET_OWNER )
    {
        return firebase.ref( PET_OWNER_TABLE );
    }
    else if ( usertype === PENDING_PET_BOARDING )
    {
        return firebase.ref( PENDING_PET_BOARDING_TABLE );
    }
    else if ( usertype === PENDING_PET_STORE )
    {
        return firebase.ref( PENDING_PET_STORE_TABLE );
    }
    else if ( usertype === PENDING_VET )
    {
        return firebase.database().ref( PENDING_VET_TABLE );
    }
    else if ( usertype === APPROVED_PET_BOARDING )
    {
        return firebase.ref( APPROVED_PET_BOARDING_TABLE );
    }
    else if ( usertype === APPROVED_PET_STORE )
    {
        return firebase.ref( APPROVED_PET_STORE_TABLE );
    }
    else if ( usertype === APPROVED_VET )
    {
        return firebase.ref( APPROVED_VET_TABLE );
    }
    else{
        return null;
    }
}

// Get User's Certificate 
const getUserCert = (usertype, id) => {
    if( usertype === PENDING_PET_BOARDING )
    {
        return firebase.ref( PENDING_PET_BOARDING_TABLE + SLASH + id + CERTIFICATE);
    } 
    else if ( usertype === PENDING_VET )
    {
        return firebase.ref( PENDING_VET_TABLE + SLASH + id + CERTIFICATE);
    }
    else{
        return null;
    }
}

// Remove data from DB after approve or decline base in user type
const removeUser = ( usertype , id ) =>{
    if ( usertype === PENDING_PET_BOARDING )
    {
        return firebase.ref( PENDING_PET_BOARDING_TABLE ).child(id).remove();
    }
    else if ( usertype === PENDING_PET_STORE )
    {
        return firebase.ref( PENDING_PET_STORE_TABLE ).child(id).remove();
    }
    else if ( usertype === PENDING_VET )
    {
        return firebase.ref( PENDING_VET_TABLE ).child(id).remove();
    }
    else{
        return null;
    }
}

// Add user Details in there designated userType
const addUserDetails = ( usertype , data ) =>{
    if ( usertype === PENDING_PET_BOARDING )
    {
        return firebase.ref( APPROVED_PET_BOARDING_TABLE ).child(data.uid).set(data);
    }
    else if ( usertype === PENDING_PET_STORE )
    {
        return firebase.ref( APPROVED_PET_STORE_TABLE ).child(data.uid).set(data);
    }
    else if ( usertype === PENDING_VET )
    {
        return firebase.ref( APPROVED_VET_TABLE ).child(data.uid).set(data);
    }
    else{
        return null;
    }
}

const addInAllUsersTBL = (data) => {
    return firebase.ref( ALLUSERS ).child(data.uid).set(data);
}

const addUserCert = (uid, img) => {
    return firebase.ref( CERT ).child(uid).set(img);
}

const getApprovedUserCert = (uid) => {
    return firebase.ref( CERT + SLASH + uid );
}

const validPhoneNo = (phoneNo) =>{
    let phCode = phoneNo.substring(0, 3);
    if (phCode === "+63" && phoneNo.length  === 13)
    {
        return phoneNo.slice(3, phoneNo.length);
    }
    else if ( phoneNo.length === 11 && phoneNo.charAt(0) === "0" )
    {
        return phoneNo.slice(1, phoneNo.length);
    }
    else{
        return "";
    }
}

export default {
    logout,
    auth,
    getAll,
    getUserCert,
    removeUser,
    addUserDetails,
    addInAllUsersTBL,
    addUserCert,
    getApprovedUserCert,
    validPhoneNo
};