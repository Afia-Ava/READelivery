import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCn-1-Lp4Cweu99s68ODDEQOX69isn3ro8',
  authDomain: 'the-aureon.firebaseapp.com',
  projectId: 'the-aureon',
  storageBucket: 'the-aureon.appspot.com',
  messagingSenderId: '',
  appId: '',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
