import Link from 'next/link'
import { useState } from 'react'
import { AuthFunctions } from '../src/AuthContext'
import { setDoc, doc, getDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useRouter } from 'next/router'
import { updateProfile } from 'firebase/auth'

const SignUp = () => {
  const { user } = AuthFunctions()
  const { createUser } = AuthFunctions()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const router = useRouter()
  /* ==========================Functions================================ */
  // this function creates the user in firebase, and creates a document with their email in the users collection in firebase.
  const handleSignUp = async (e) => {
    e.preventDefault()
    const docRef = doc(db, 'users', displayName)
    const createdDisplayName = await getDoc(docRef)
    if (createdDisplayName.exists()) {
      alert('Display Name already exists')
    } else {
      try {
        const createdUser = await createUser(email, password)
        await updateProfile(createdUser.user, {
          displayName: displayName,
          photoURL: '/apexLogo.png',
        })
        const userExists = await doc(db, 'users', displayName)

        await setDoc(doc(db, 'users', displayName), {
          email: email,
          displayName: displayName,
          currentRank: [],
          favoriteChamps: [],
          favoriteGuns: [],
          tagline: '',
          comments: [],
          photoURL: '/apexLogo.png',
          playstyle: [],
        })
        router.push('/')
      } catch (err) {
        console.log(err.message)
      }
    }
  }
  /* ==========================Design Variables================================ */
  const design = {
    formInputStyle:
      'border-gray-400 p-2 ml-2 border-b bg-zinc-700  focus:border-none text-white',
    labelStyle: 'text-sm text-gray-600',
    formStyle:
      'flex flex-col items-center justify-center border border-red-900 mx-auto p-20 gap-10  rounded bg-zinc-700',
    buttonStyle:
      ' bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
    header1Style: 'text-2xl text-gray-200',
    spanStyle: 'text-xs text-gray-600 flex justify-center',
    articleStyle: 'flex justify-center items-center gap-2 pt-2',
    linkStyle: 'text-xs text-red-900',
    divStyle: 'p-6 bg-zinc-900 min-h-screen relative z-10',
  }
  return (
    <div className={design.divStyle}>
      <form className={design.formStyle}>
        <h1 className={design.header1Style}>Sign Up</h1>
        <input
          className={design.formInputStyle}
          type="text"
          id="displayName"
          name="displayName"
          placeholder="Display Name"
          maxLength="12"
          onChange={(e) => setDisplayName(e.target.value)}
        />

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
        <button className={design.buttonStyle} onClick={handleSignUp}>
          {' '}
          Sign Up{' '}
        </button>
      </form>
      <article className={design.articleStyle}>
        <span className={design.spanStyle}>Already have an account?</span>
        <Link href="/SignIn">
          <a className={design.linkStyle}>Sign In!</a>
        </Link>
      </article>
    </div>
  )
}
export default SignUp
