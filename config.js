import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAJYtIcJl0PUGHNSnZQXK0XEba4MTf8kl4',
  authDomain: 'clayartmobileapp.firebaseapp.com',
  projectId: 'clayartmobileapp',
  storageBucket: 'clayartmobileapp.appspot.com',
  messagingSenderId: '684134292884',
  appId: '1:684134292884:web:65fa9b6ee1b7f199924381',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
