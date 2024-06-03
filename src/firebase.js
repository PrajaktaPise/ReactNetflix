import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBxMpUs9bAqvL55kmC--3FkGqFv2korH9I",
  authDomain: "netflixclone-dd4ec.firebaseapp.com",
  projectId: "netflixclone-dd4ec",
  storageBucket: "netflixclone-dd4ec.appspot.com",
  messagingSenderId: "67223226642",
  appId: "1:67223226642:web:a34232d5558476f8920bcb",
  measurementId: "G-637F5MMWXC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, user), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
   toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const login = async (email, password) => {
  try {
   await signInWithEmailAndPassword(auth,email,password);
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};
const logout=()=>{
    
    signOut(auth);
}
export {auth,db,login,signup,logout};