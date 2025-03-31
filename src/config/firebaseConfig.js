import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAh5XXgHqtddD1rqmMOPN5twk9UDCWRKVA",
  authDomain: "ptac-projeto.firebaseapp.com",
  projectId: "ptac-projeto",
  storageBucket: "ptac-projeto.firebasestorage.app",
  messagingSenderId: "245792746993",
  appId: "1:245792746993:web:041cc4ac64cd1c923ae850",
  measurementId: "G-CV0VB3L77C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };