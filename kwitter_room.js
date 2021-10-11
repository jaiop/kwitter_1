//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDa1ov7JoHXkyBXrGANKJFuGgp5rQ1mdRY",
      authDomain: "kwitter-project-49f63.firebaseapp.com",
      projectId: "kwitter-project-49f63",
      storageBucket: "kwitter-project-49f63.appspot.com",
      messagingSenderId: "521667289130",
      appId: "1:521667289130:web:114afc87c2621ca5a32353"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
   
      //End code
      });});}
getData();
