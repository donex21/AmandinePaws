import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import firebase from './config/fbconfig';
import rootReducer from './store/reducers/rootReducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
//import $ from 'jquery';
//import Popper from 'popper.js';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})));

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch
}

function AuthIsLoaded({ children }){
  const auth = useSelector(state => state.firebase.auth);
  if(!isLoaded(auth)) return <div> Loading Screen....</div>;
  return children;
}

ReactDOM.render(
  <Provider store = {store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <AuthIsLoaded>
          <App/>
        </AuthIsLoaded>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>, document.getElementById('root')
);
reportWebVitals();

  