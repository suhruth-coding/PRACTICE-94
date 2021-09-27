// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgsp63oL3EqJV9KrEmCV0YSUauZAzDkG8",
    authDomain: "flitter-9e544.firebaseapp.com",
    databaseURL: "https://flitter-9e544-default-rtdb.firebaseio.com",
    projectId: "flitter-9e544",
    storageBucket: "flitter-9e544.appspot.com",
    messagingSenderId: "768329543620",
    appId: "1:768329543620:web:a1b68572ae8f44513dfe91"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser() { 
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update(
          { purpose : "adding user" });
    }