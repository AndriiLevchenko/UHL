import firebase from 'firebase';
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA16LghFkYz6JtIJZKBS67x578GmqVBRGo",
    authDomain: "abzagency.firebaseapp.com",
    databaseURL: "https://abzagency.firebaseio.com",
    projectId: "abzagency",
    storageBucket: "abzagency.appspot.com",
    messagingSenderId: "368817857964"
  };

  const fire=firebase.initializeApp(config);
  export default fire;