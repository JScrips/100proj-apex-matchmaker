import React from 'react'
import { AuthFunctions } from '../src/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user } = AuthFunctions()

  const showThis = user ? children : 'sign in hoe'
  return <div>{showThis}</div>
}

export default ProtectedRoute
