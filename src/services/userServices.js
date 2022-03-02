import { addDoc, collection, doc, deleteDoc, getDocs, updateDoc } from 'firebase/firestore'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  signInWithCustomToken
} from 'firebase/auth'
import { firebaseAuth, firebaseFirestore } from 'config/firebase'

export const signup = async (name, title, email, contact, password, image) => {
  const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password)

  await addDoc(collection(firebaseFirestore, 'users'), {
    uid: user.uid,
    name,
    title,
    email,
    contact,
    image
  })

  return { email: user.email }
}

export const login = async (email, password) =>
  await signInWithEmailAndPassword(firebaseAuth, email, password)

export const loginWithToken = async token => {
  const auth = getAuth()
  return await signInWithCustomToken(auth, token)
}

export const userLogout = async () => {
  const auth = getAuth()
  return await signOut(auth)
}

export const getUsers = async () => {
  const snapshot = await getDocs(collection(firebaseFirestore, 'users'))
  const allUsers = []
  snapshot.docs.map(doc => {
    allUsers.push({ ...doc.data(), id: doc.id })
  })

  return allUsers
}

export const updateUser = async user => {
  const { uid, name, title, email, contact, password } = user
  const userRef = doc(firebaseFirestore, 'users', uid)
  return await updateDoc(userRef, {
    uid,
    name,
    title,
    email,
    contact,
    password
  })
}

export const removeUser = async uid => {
  const userRef = doc(firebaseFirestore, 'users', uid)
  return await deleteDoc(userRef)
}
