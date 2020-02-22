import firebase from 'firebase';


   var config = {
    apiKey: "AIzaSyA16LghFkYz6JtIJZKBS67x578GmqVBRGo",
    authDomain: "abzagency.firebaseapp.com",
    databaseURL: "https://abzagency.firebaseio.com",
    projectId: "abzagency",
                                                      withCredentials: true,
    storageBucket: "abzagency.appspot.com",
    messagingSenderId: "368817857964",
    appId: "1:368817857964:web:17a85cfd190fe6a139c609"
  };

  const fire=firebase.initializeApp(config);
  export default fire;