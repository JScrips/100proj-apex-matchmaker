import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  currentUser,
} from 'firebase/auth'
import { auth } from '../firebase-config'

export const AuthContext = createContext()
// this begins the creation of the AuthContext

//this is the provider for the context we just created. We pass in the children, which are the other components that the context is wrapping.
export const AuthContextProvider = ({ children }) => {
  //assign a current user when the user logs in. Set it to null to start.
  const [user, setUser] = useState(null)
  // useEffect will run when the component is mounted, and will run the userStatus function when the user logs in or out.
  useEffect(() => {
    const userStatus = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (user) {
        console.log('user logged in')
      } else {
        console.log('user logged out')
      }
    })

    return () => {
      userStatus()
    }
  }, [])

  //create a function to sign up using email and password.
  const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //create a function to sign in the user with email and password

  const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //create a function to sign out the user
  const logOutUser = () => {
    return signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, createUser, logOutUser, signInUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthFunctions = () => {
  return useContext(AuthContext)
}
