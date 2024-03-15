// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { getFirestore, doc, getDoc,
     getDocs, collection,addDoc,
      deleteDoc,onSnapshot,
      query,where,
      orderBy,
      serverTimestamp
    } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4xEl-eimJdW7LTlUHa15P_XY3rQ86xVg",
    authDomain: "testapp-17c71.firebaseapp.com",
    projectId: "testapp-17c71",
    storageBucket: "testapp-17c71.appspot.com",
    messagingSenderId: "425931389290",
    appId: "1:425931389290:web:9f62dcba458d83f7648d13",
    measurementId: "G-5DK43E0EL5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const questionsData = require('../data/questions.json');

// Upload questions to Firestore
questionsData.forEach(async (questionData) => {
  try {
    await addDoc(collection(db, 'questions'), questionData);
    console.log('Question added successfully!');
  } catch (error) {
    console.error('Error adding question:', error);
  }
});
// const colRef = collection(db,'books');

// querying(given name data)

// const q = query(colRef,orderBy("createdAt"))

// #not realtime datastoring and fetching in console

// getDocs(colRef).then((snapshot)=>{
//     let books = [];
//     snapshot.docs.forEach((doc)=>{
//         books.push({...doc.data(), id: doc.id});
//     })
//     console.log(books);
// })

// realtime fetching anf showing in console

// onSnapshot(q,(snapshot)=>{
//     let books = [];
//     snapshot.docs.forEach((doc)=>{
//         books.push({...doc.data(), id: doc.id});
//     })
//     console.log(books);
// })

// const addNewBook = document.querySelector('.add')
// addNewBook.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     addDoc(colRef,{
//         title: addNewBook.title.value,
//         author: addNewBook.author.value,
//         createdAt: serverTimestamp()
//     })
//     .then(()=>{
//         addNewBook.reset();
//     })
// })

// const deleteNewBook = document.querySelector('.delete')
// deleteNewBook.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     const docRef = doc(db,'books',deleteNewBook.id.value);
//     deleteDoc(docRef)
//     .then(()=>{
//         deleteNewBook.reset();
//     })
// })