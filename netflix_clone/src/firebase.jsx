// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore';
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { addDoc,collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE3CkiGTICCvIRnUL_Hg4vEzzP_m6upic",
  authDomain: "netflix-clone-1b694.firebaseapp.com",
  projectId: "netflix-clone-1b694",
  storageBucket: "netflix-clone-1b694.appspot.com",
  messagingSenderId: "123684655350",
  appId: "1:123684655350:web:d37ef2eff92e65baf79cd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const db =getFirestore(app);
const signup=async(name,email,password)=>{
    try{
   const res=     await createUserWithEmailAndPassword(auth,email,password);
   const user=res.user;
   await addDoc(collection(db,"user"),
{
    uid:user.uid,
    name,
    authProvider:"local",
    email,
});
    }catch(error){
       console.log(error);
       alert(error);
    }
}
const login=async(email,password)=>{
    try{
     await signInWithEmailAndPassword(auth,email,password);
    }catch(error){
        console.log(error); 
        alert(error);
    }
}
const logout=()=>{
    signOut(auth);
}
export{auth,db,login,signup,logout};