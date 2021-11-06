import React from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import './App.scss'
import HeaderNavBar from './components/HeaderNavBar';
import Login from './components/Login';
import PetBoarding from './components/PetBoarding/PetBoarding';
import PetOwner from './components/PetOwner/PetOwner';
import PetStore from './components/PetStore/PetStore';
import Veterinarian from './components/Veterinarian/Veterinarian';
import Home from './components/Home';
import AdminInfo from './components/AdminInfo';
import SinglePendingVet from './components/Veterinarian/SinglePendingVet';
import SingleApprovedVet from './components/Veterinarian/SingleApprovedVet';
import SinglePetOwner from './components/PetOwner/SinglePetOwner';
import SingleApprovedPetStore from './components/PetStore/SingleApprovedPetStore';
import SinglePendingPetStore from './components/PetStore/SinglePendingPetStore';
import SinglePendingBoarding from './components/PetBoarding/SinglePendingBoarding';
import SingleApprovedBoarding from './components/PetBoarding/SingleApprovedBoarding';


function App(props) {
  const {auth} = props;
  const withnavhead = auth.uid && <HeaderNavBar/>;
  const thisYear = new Date().getFullYear();
  return (
    <div className = "app-main">
       { withnavhead }
       <Switch>
              <Route exact path = '/' component = {Login} />
              <Route exact path = '/Home' component = {Home} />
              <Route exact path = '/PetBoarding' component = {PetBoarding} />
              <Route exact path = '/Veterinarian' component = {Veterinarian} />
              <Route exact path = '/PetOwner' component = {PetOwner} />
              <Route exact path = '/PetStore' component = {PetStore} />
              <Route exact path = '/AdminInfo' component = {AdminInfo} />
              <Route exact path = '/SinglePendingVet' component = {SinglePendingVet} />
              <Route exact path = '/SingleApprovedVet' component = {SingleApprovedVet} />
              <Route exact path = '/SinglePetOwner' component = {SinglePetOwner} />
              <Route exact path = '/SingleApprovedPetStore' component = {SingleApprovedPetStore} />
              <Route exact path = '/SinglePendingPetStore' component = {SinglePendingPetStore} />
              <Route exact path = '/SinglePendingBoarding' component = {SinglePendingBoarding} />
              <Route exact path = '/SingleApprovedBoarding' component = {SingleApprovedBoarding} />
        </Switch>
      
        <div className = "footer mt-5">
          <h6>Copyright @ AmandinePaws {thisYear}</h6>
        </div>  
        
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
      auth: state.firebase.auth
  }
}
export default connect(mapStateToProps) (App)
