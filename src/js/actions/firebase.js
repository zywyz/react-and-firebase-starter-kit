// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import config from '../config/config';
firebase.initializeApp(config.firebase);
const fbase = firebase.database().ref();
const authProvider = new firebase.auth.GoogleAuthProvider();

import { setLoggedIn, resetLoggedIn, setUserData } from './loginStatus';
import store from '../reducers/index';

function setData(data) {
  return ({
    type: 'SET_DATA',
    data,
  });
}

export function getData() {
  return dispatch => {
    fbase.child('data').once('value').then((data) => {
      // console.log(data.val());
      dispatch(setData(data.val()));
    });
  };
}

function setRestrictedData(data) {
  return ({
    type: 'SET_RESTRICTED_DATA',
    data,
  });
}

function resetRestrictedData() {
  return ({
    type: 'RESET_RESTRICTED_DATA',
  });
}

function getRestrictedData() {
  return dispatch => {
    fbase.child('restricted').once('value').then((data) => {
      // console.log(data.val());
      dispatch(setRestrictedData(data.val()));
    });
  };
}

export function loginOrRegisterWithGoogle() {
  return dispatch => {
    firebase.auth().signInWithPopup(authProvider).then((result) => {
      // var token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user; // eslint-disable-line
      dispatch(setLoggedIn());
    })
      .catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage); // eslint-disable-line
        dispatch(resetLoggedIn());
      });
  };
}

export function logout() {
  return dispatch => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      dispatch(resetLoggedIn());
      dispatch(resetRestrictedData());
    }, (error) => { // eslint-disable-line
      // An error happened.
    });
  };
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    store.dispatch(setLoggedIn());
    store.dispatch(setUserData(user.displayName, user.photoURL));
    store.dispatch(getRestrictedData());
  } else {
    // No user is signed in.
    store.dispatch(resetLoggedIn());
    store.dispatch(resetRestrictedData());
  }
});
