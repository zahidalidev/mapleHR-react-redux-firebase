import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth, firebaseFirestore } from 'config/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

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

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password)
}

export const getUsers = async () => {
  const snapshot = await getDocs(collection(firebaseFirestore, 'users'))
  const allUsers = []
  snapshot.docs.map(doc => {
    allUsers.push({ ...doc.data(), id: doc.id })
  })

  return allUsers
}
