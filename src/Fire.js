import firebase from 'firebase';


   var config = {
    apiKey: "AIzaSyA16LghFkYz6JtIJZKBS67x578GmqVBRGo",
     key: "AIzaSyA16LghFkYz6JtIJZKBS67x578GmqVBRGo",
    //apiKey: "AAAAVd9B5aw:APA91bEBExSFLfVlTq5F_B6EyFDSvkCZ97-TPw34wZvcG2tYa0qcEwwQtZeOkwsVfgwEXXuRLJ2edugg85f-23-4F9KLqTAfa4V7-uAfvtfaTod_tM4MpykTnOsCazOjoUB2tcTOmAD6",
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