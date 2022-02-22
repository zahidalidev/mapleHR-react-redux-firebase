import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth, firebaseFirestore } from 'config/firebase'
import { collection, addDoc } from 'firebase/firestore'

export const signup = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password)

  await addDoc(collection(firebaseFirestore, 'users'), {
    uid: user.uid,
    email: user.email
  })

  return { email: user.email }
}

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password)
}
