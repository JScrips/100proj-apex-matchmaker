import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

console.log(process.env.API_KEY)

// const firebaseConfig = {
//   apiKey: 'AIzaSyAZ7xAGVvDownh2d-3E3G0pw3eXvNU14JA',
//   authDomain: 'proj-apex-matchmaker.firebaseapp.com',
//   projectId: 'proj-apex-matchmaker',
//   storageBucket: 'proj-apex-matchmaker.appspot.com',
//   messagingSenderId: '955861648251',
//   appId: '1:955861648251:web:c106181b9952ecedccb3de',
// }

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
