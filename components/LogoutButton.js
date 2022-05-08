import React from 'react'
import { AuthFunctions } from '../src/AuthContext'
import { useRouter } from 'next/router'

const LogoutButton = () => {
  const router = useRouter()
  /* ==========================Functions================================ */
  //this function logs the user out
  const { logOutUser } = AuthFunctions()
  const handleLogout = () => {
    logOutUser()
    router.push('/')
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
