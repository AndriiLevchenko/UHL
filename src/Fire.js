import firebase from 'firebase';
// Initialize Firebase
//   const config = {
//   apiKey: "AIzaSyCM9Wzq78f9jJABQcwNf7CZhUZmd43YeRs",
//   authDomain: "lyceum-9e8e0.firebaseapp.com",
//   databaseURL: "https://lyceum-9e8e0.firebaseio.com",
//   projectId: "lyceum-9e8e0",
//   storageBucket: "lyceum-9e8e0.appspot.com",
//   messagingSenderId: "105341949963",
//   appId: "1:105341949963:web:76c2a4045c0cdfd7c08f0e",
//   measurementId: "G-663LTGYK7B"
// };

 // const config = {
 //    apiKey: "AIzaSyA16LghFkYz6JtIJZKBS67x578GmqVBRGo",
 //    authDomain: "abzagency.firebaseapp.com",
 //    databaseURL: "https://abzagency.firebaseio.com",
 //    projectId: "abzagency",
 //    storageBucket: "abzagency.appspot.com",
 //    messagingSenderId: "368817857964"
 //  };

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