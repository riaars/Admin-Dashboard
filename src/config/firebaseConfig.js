import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAa-gXbzlRcyxLW7EGcH7JwihVIvcGGzyM',
  authDomain: 'projectdashboard-606ec.firebaseapp.com',
  databaseURL: 'https://projectdashboard-606ec.firebaseio.com',
  projectId: 'projectdashboard-606ec',
  storageBucket: 'projectdashboard-606ec.appspot.com',
  messagingSenderId: '1084063241451',
  appId: '1:1084063241451:web:d8a889648f5bbdee019aae',
  measurementId: 'G-9KDHSNWQ2B',
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({
//   timestampsInSnapshots: true,
// });

export default firebase;
