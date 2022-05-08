import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { AuthFunctions } from '../src/AuthContext'
import { useRouter } from 'next/router'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, signInUser } = AuthFunctions()
  const router = useRouter()

  /* ==========================Functions================================ */
  // this function takes the inputted information and signs the user in
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const userRef = collection(db, 'users')
      const userQuery = query(userRef, where('email', '==', email))
      const user = await getDocs(userQuery)
      const endPoint = user.docs[0].id
      await signInUser(email, password)
      router.push(`/Profile/${endPoint}`)
    } catch (err) {
      console.log(err.message)
    }
  }

  /* ==========================Design Variables================================ */
  const design = {
    formInputStyle: 'border-gray-400 p-2 ml-2 border-b bg-zinc-700 text-white',
    labelStyle: 'text-sm text-gray-600',
    formStyle:
      'flex flex-col items-center justify-center border border-red-900 mx-auto p-20 gap-10  rounded bg-zinc-700',
    buttonStyle:
      ' bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
    header1Style: 'text-2xl text-gray-200',
    spanStyle: 'text-xs text-gray-600 flex justify-center',
    articleStyle: 'flex justify-center items-center gap-2 pt-2',
    linkStyle: 'text-xs text-red-900',
    divStyle: 'p-6 bg-zinc-900',
  }
  return (
    <div className={design.divStyle}>
      <form className={design.formStyle}>
        <h1 className={design.header1Style}>Sign In</h1>
        <input
          className={design.formInputStyle}
          type="email"
          id="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={design.formInputStyle}
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={design.buttonStyle} onClick={handleClick}>
          {' '}
          Sign In{' '}
        </button>
      </form>
      <article className={design.articleStyle}>
        <span className={design.spanStyle}>Don't have an account yet?</span>
        <Link href="/SignUp">
          <a className={design.linkStyle}>Sign Up!</a>
        </Link>
      </article>
    </div>
  )
}

export default SignIn
