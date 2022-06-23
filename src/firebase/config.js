import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDNCsM7HKylKwWtTvOw9CH4FMYNEU38_7E",
  authDomain: "react-blog-2bdb2.firebaseapp.com",
  projectId: "react-blog-2bdb2",
  storageBucket: "react-blog-2bdb2.appspot.com",
  messagingSenderId: "62093861832",
  appId: "1:62093861832:web:ffefd4a8846c01171596fd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }