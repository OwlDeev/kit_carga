import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCQfrw2dVgdGvfx29lLvsQaD98F_U0PGuk",
  authDomain: "kit-carga.firebaseapp.com",
  projectId: "kit-carga",
  storageBucket: "kit-carga.appspot.com",
  messagingSenderId: "295237730328",
  appId: "1:295237730328:web:ce343458375d61dc27c36d",
  measurementId: "G-CN2D8Q4PZD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
