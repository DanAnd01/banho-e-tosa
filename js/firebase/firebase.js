
const firebaseConfig = {
  apiKey: "AIzaSyBOoFvDZ2kDyhYfAGUSoBocSs1G2GCeiOE",
  authDomain: "martins-projeto.firebaseapp.com",
  databaseURL: "https://martins-projeto-default-rtdb.firebaseio.com/",
  projectId: "martins-projeto",
  storageBucket: "martins-projeto.appspot.com",
  messagingSenderId: "917198089920",
  appId: "1:917198089920:web:95db0fc8f80a77d4538725"
};


// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
// Crie uma referência para o Realtime Database do Firebase
const database = firebase.database();
// Crie uma referência para o armazenamento do Firebase
const storageRef = firebase.storage().ref();
