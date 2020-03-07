import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDNg_auV-eEi5qxDhk-o-IfYDa_4mV80A0",
  authDomain: "ketoish-girl-test.firebaseapp.com",
  databaseURL: "https://ketoish-girl-test.firebaseio.com",
  projectId: "ketoish-girl-test",
  storageBucket: "ketoish-girl-test.appspot.com",    messagingSenderId: "934058280034",
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
