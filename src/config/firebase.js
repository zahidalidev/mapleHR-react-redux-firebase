import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export const firebaseConfig = {
  apiKey: 'AIzaSyD3-U7yu9NUcyWfv8z3eNgLpyD5hHUznTw',
  authDomain: 'maplhr-final.firebaseapp.com',
  projectId: 'maplhr-final',
  storageBucket: 'maplhr-final.appspot.com',
  messagingSenderId: '266669100280',
  appId: '1:266669100280:web:a08760722e03196494ff0d',
  measurementId: 'G-7P6TKMTEGD'
}

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORGAE_BUCKET,
//   messagingSenderId: process.env.MESSANGER_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID
// }

const app = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(app)
const firebaseDatabase = getDatabase(app)
const firebaseFirestore = getFirestore(app)

export { firebaseAuth, firebaseDatabase, firebaseFirestore }
