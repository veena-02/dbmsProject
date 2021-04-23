const config={
    apiKey: "AIzaSyDp9yhCDXdwoPReBZa3h_QPHod4h3Lpd6E",
    authDomain: "dbms-blogproject-30713.firebaseapp.com",
    projectId: "dbms-blogproject-30713",
    storageBucket: "dbms-blogproject-30713.appspot.com",
    messagingSenderId: "1024664724591",
    appId: "1:1024664724591:web:6e48630bc56cca8605d99a",
    measurementId: "G-YS6Z2RX0TN"
}
firebase.initializeApp(config);
const firestore = firebase.firestore(); 

const progressHandler=document.querySelector("#progressHandler");
const progressBar=document.querySelector("#progressBar");
const createForm=document.querySelector("#createForm");
const postSubmit=document.querySelector("#postSubmit");

