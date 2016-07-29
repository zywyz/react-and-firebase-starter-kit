// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/database';
import config from '../config/config';
firebase.initializeApp(config.firebase);
const fbase = firebase.database().ref();

export function getData() {
  return dispatch => {
    fbase.child('data').once('value').then((data) => {
      // console.log(data.val());
      dispatch({
        type: 'SET_DATA',
        data: data.val(),
      });
    });
  };
}
