// Initialize Firebase
var config = {
  apiKey: "AIzaSyDYS9Kmx0oYa2yteooAlBanVWMY4KkVwmU",
  authDomain: "scripted-internchat-174014.firebaseapp.com",
  databaseURL: "https://scripted-internchat-174014.firebaseio.com",
  projectId: "scripted-internchat-174014",
  storageBucket: "",
  messagingSenderId: "266802961407"
};

var myFirebase = new Firebase('https://scripted-internchat-174014.firebaseio.com/');

var usernameInput = document.querySelector('#username');
var textInput = document.querySelector('#text');
var postButton = document.querySelector('#post');

postButton.addEventListener("click", function() {
  var msgUser = usernameInput.value;
  var msgText = textInput.value;
  myFirebase.push({
    username: msgUser,
    text: msgText
  });
  textInput.value = "";
});

var startListening = function() {
  myFirebase.on('child_added', function(snapshot) {
    var msg = snapshot.val();

    var msgUsernameElement = document.createElement("b");
    msgUsernameElement.textContent = msg.username;

    var msgTextElement = document.createElement("p");
    msgTextElement.textContent = msg.text;

    var msgElement = document.createElement("div");
    msgElement.appendChild(msgUsernameElement);
    msgElement.appendChild(msgTextElement);

    msgElement.className = "msg";
    document.getElementById("results").appendChild(msgElement);
  });
}

// Begin listening for data
startListening();

firebase.initializeApp(config);
