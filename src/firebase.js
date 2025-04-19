
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, 
  getAuth,
  signInWithEmailAndPassword, 
  signOut} from "firebase/auth";

import { addDoc,
        collection, 
        getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD8a1YKy_bsgPeCif6JOTH6w1UxI7vaHyk",
  authDomain: "netflix-clone-175a0.firebaseapp.com",
  projectId: "netflix-clone-175a0",
  storageBucket: "netflix-clone-175a0.firebasestorage.app",
  messagingSenderId: "129823635627",
  appId: "1:129823635627:web:01df37ce78dd0a4a489fee",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
     toast.error(error.code. split('/')[1].split('-').join(" "));
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
     toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}

const logout = async () => {
  signOut(auth);
}

export {auth, db, login, signup, logout};

