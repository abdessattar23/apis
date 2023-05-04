const firebase = require('firebase/app');
require('firebase/database');
const axios = require("axios");

// Get a reference to the database
const database = firebase.database();

exports.handler = async (event, context) => {
  try {
    const config = await axios.get("https://api-s.netlify.app/.netlify/functions/newUser");
    firebase.initializeApp(config);
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
