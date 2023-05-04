const firebase = require('firebase/app');
require('firebase/database');

// Initialize Firebase app with your configuration
firebase.initializeApp({
  apiKey: "AIzaSyDDq_cXa6AbPBpsD1Q_d-89Yd7KPTj4kQg",
  authDomain: "api--s.firebaseapp.com",
  projectId: "api--s",
  storageBucket: "api--s.appspot.com",
  messagingSenderId: "242984774494",
  appId: "1:242984774494:web:f0b17eec68ef637d07fdcf",
  measurementId: "G-HPT5J45N07"
});

exports.handler = async (event, context) => {
  const { username, fullname, age, password } = event.queryStringParameters;

  try {
    // Create the main folder with the given name
    await firebase.database().ref(username).set('');

    // Create the 'info' subfolder and upload the data
    const infoRef = firebase.database().ref(`${username}/info`);
    await infoRef.set({ username, fullname, age, password });

    // Return success message
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'SUCCESS' })
    };
  } catch (error) {
    // Return error message
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'FAILED', error })
    };
  }
};
