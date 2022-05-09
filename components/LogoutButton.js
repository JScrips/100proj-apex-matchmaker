import React from 'react'
import { AuthFunctions } from '../src/AuthContext'
import { useRouter } from 'next/router'
import { db } from '../firebase-config'
import { doc, updateDoc } from 'firebase/firestore'

const LogoutButton = () => {
  const router = useRouter()
  const { user } = AuthFunctions()
  /* ==========================Functions================================ */
  //this function logs the user out
  const { logOutUser } = AuthFunctions()

  const handleLogout = async () => {
    logOutUser()
    router.push('/')
    await updateDoc(doc(db, 'users', user.displayName), {
      status: 'Offline',
    })
  }

  /* ==========================Design Object================================ */
  const design = {
    buttonStyle:
      'bg-white hover:bg-red-700 hover:text-white text-red-900 font-bold py-1 px-2 rounded',
  }
  return (
    <button className={design.buttonStyle} onClick={handleLogout}>
      Logout
    </button>
  )
}

export default LogoutButton
