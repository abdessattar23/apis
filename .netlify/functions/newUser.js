

exports.handler = async (event, context) => {

  try {
 
cont firebase = {
  apiKey: "AIzaSyDDq_cXa6AbPBpsD1Q_d-89Yd7KPTj4kQg",
  authDomain: "api--s.firebaseapp.com",
  databaseURL: "https://api--s-default-rtdb.firebaseio.com",
  projectId: "api--s",
  storageBucket: "api--s.appspot.com",
  messagingSenderId: "242984774494",
  appId: "1:242984774494:web:f0b17eec68ef637d07fdcf",
  measurementId: "G-HPT5J45N07"
};
    return {
      statusCode: 200,
      body: JSON.stringify(firebase)
    };
  } catch (error) {
    // Return error message
    return {
      statusCode: 500,
      body: JSON.stringify({ error })
    };
  }
};
