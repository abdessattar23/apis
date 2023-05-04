import { initializeApp } from "firebase/app";

import { database, ref, set, child } from "firebase/database";


exports.handler = async (event, context) => {
  try {
    firebase.initializeApp({
apiKey: "AIzaSyDDq_cXa6AbPBpsD1Q_d-89Yd7KPTj4kQg",
authDomain: "api--s.firebaseapp.com",
databaseURL: "https://api--s-default-rtdb.firebaseio.com",
projectId: "api--s",
storageBucket: "api--s.appspot.com",
messagingSenderId: "242984774494",
appId: "1:242984774494:web:f0b17eec68ef637d07fdcf",
measurementId: "G-HPT5J45N07"
});
    // Get a reference to the database
const database = firebase.database();

    // Read data from the request body
    const body = JSON.parse(event.body);
    const { username, fullname, age, password } = body;

    // Create a new folder in the database
    const folderRef = database.ref(username);
    await folderRef.set('');

    // Add user information to the folder
    const userRef = folderRef.child('info');
    await userRef.set({ username, fullname, age, password });

    // Return success message
    return {
      statusCode: 200,
      headers:{
      'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ message: 'SUCCESS' })
    };
  } catch (error) {
    // Return error message
    return {
      statusCode: 500,
      headers:{
      'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ message: 'FAILED', error })
    };
  }
};
