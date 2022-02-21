import { firebaseFirestore } from 'config/firebase'
import { collection, addDoc } from 'firebase/firestore'

export const login = async (uid, email) => {
  return await addDoc(collection(firebaseFirestore, 'users'), {
    uid,
    email
  })
}
