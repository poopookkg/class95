var firebaseConfig = {
    apiKey: "AIzaSyCxtKTRcmfVOBKy_Ma9xb02DPUnVXpwaHA",
    authDomain: "twitter-f957b.firebaseapp.com",
    databaseURL: "https://twitter-f957b-default-rtdb.firebaseio.com",
    projectId: "twitter-f957b",
    storageBucket: "twitter-f957b.appspot.com",
    messagingSenderId: "826548566173",
    appId: "1:826548566173:web:d4b3375a0a1c589099bc74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg");
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    })
    document.getElementById("msg").value = "";
  };