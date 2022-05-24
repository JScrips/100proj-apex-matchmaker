import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { AuthFunctions } from '../src/AuthContext'
import { setDoc, doc, getDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useRouter } from 'next/router'
import { updateProfile } from 'firebase/auth'
import { check } from 'prettier'

const SignUpComponent = () => {
  const { user } = AuthFunctions()
  const { createUser } = AuthFunctions()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()
  /* ==========================Functions================================ */
  // this function creates the user in firebase, and creates a document with their email in the users collection in firebase.
  const handleSignUp = async (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      const docRef = doc(db, 'users', displayName)
      console.log(docRef)
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
            status: 'Online',
          })
          router.push('/')
        } catch (err) {
          console.log(err.message)
        }
      }
    } else {
      alert('Passwords do not match')
    }
  }

  const checkAlpha = (e) => {
    const word = e.split('')
    if (
      word.includes('!') ||
      word.includes('@') ||
      word.includes('#') ||
      word.includes('$') ||
      word.includes('%') ||
      word.includes('^') ||
      word.includes('&') ||
      word.includes('*') ||
      word.includes('(') ||
      word.includes(')') ||
      word.includes('-') ||
      word.includes('_') ||
      word.includes('+') ||
      word.includes('=') ||
      word.includes('[') ||
      word.includes(']') ||
      word.includes('{') ||
      word.includes('}') ||
      word.includes(';') ||
      word.includes(':') ||
      word.includes("'") ||
      word.includes('"') ||
      word.includes('<') ||
      word.includes('>') ||
      word.includes('?') ||
      word.includes('/') ||
      word.includes('|') ||
      word.includes('\\') ||
      word.includes('`')
    ) {
      alert('Please do not use special characters')
    } else {
      console.log('no special characters')
    }
  }
  return (
    <section className="relative min-h-screen  py-20">
      <div className="container mx-auto  px-4">
        <div className="mb-12 w-full   lg:w-1/2">
          <div className=" lg:max-w-md">
            <div className="mx-auto max-w-md  py-10 text-center">
              <form action="#">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 1600 1200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m800.151515 100 515.151515 878.787879L1163.787879 1100 874.767918 903.070992h167.68392L800.151515 478.787879l-241.52721 424.283113h165.875059L436.515152 1100 285 978.787879z"
                      fill="#fff"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <span className="mb-4 inline-block text-xs font-medium text-red-800">
                    Sign Up
                  </span>
                </div>
                <h3 className="font-heading mb-12 text-3xl font-medium text-red-800">
                  Join our Community
                </h3>
                <div className="relative mb-6 flex flex-wrap">
                  <input
                    className="relative mb-2 w-full rounded border py-4 pl-4 text-sm md:mb-0"
                    type="email"
                    placeholder="e.g ApexPredator"
                    onChange={(e) => setDisplayName(e.target.value)}
                    onBlur={(e) => checkAlpha(e.target.value)}
                    required
                  />
                  <span className="absolute top-0 left-0 ml-4 -mt-2 inline-block  rounded-xl bg-white px-1 text-xs font-medium text-red-800">
                    Display Name
                  </span>
                </div>
                <div className="relative mb-6 flex flex-wrap">
                  <input
                    className="relative mb-2 w-full rounded border py-4 pl-4 text-sm md:mb-0"
                    type="email"
                    placeholder="e.g apex@royale.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className="absolute top-0 left-0 ml-4 -mt-2 inline-block  rounded-xl bg-white px-1 text-xs font-medium text-red-800">
                    E-Mail
                  </span>
                </div>
                <div className="relative mb-6 flex flex-wrap">
                  <input
                    className="relative mb-2 w-full rounded border py-4 pl-4 text-sm md:mb-0"
                    type="password"
                    placeholder="******"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span className="absolute top-0 left-0 ml-4 -mt-2 inline-block  rounded-xl bg-white px-1 text-xs font-medium text-red-800">
                    Password
                  </span>
                </div>

                <div className="relative mb-6 flex flex-wrap">
                  <input
                    className="relative mb-2 w-full rounded border py-4 pl-4 text-sm md:mb-0"
                    type="password"
                    placeholder="******"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <span className="absolute top-0 left-0 ml-4 -mt-2 inline-block  rounded-xl bg-white px-1 text-xs font-medium text-red-800">
                    Confirm Password
                  </span>
                </div>
                <button
                  className="mb-4 inline-block w-full rounded bg-red-800 py-4 text-sm font-medium leading-normal text-white transition duration-200 hover:bg-red-300
            "
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:block lg:h-auto lg:w-1/2 lg:bg-red-800">
        <svg
          width="1000"
          height="900"
          viewBox="0 0 1600 1200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 bottom-0 z-10 opacity-5 "
        >
          <path
            d="m800.151515 100 515.151515 878.787879L1163.787879 1100 874.767918 903.070992h167.68392L800.151515 478.787879l-241.52721 424.283113h165.875059L436.515152 1100 285 978.787879z"
            fill="#fff"
            fill-rule="nonzero"
          />
        </svg>

        <Image
          src="/apexwelcome.jpg"
          width={1024}
          height={554}
          objectFit="cover"
          layout="fill"
        />
      </div>
    </section>
  )
}

export default SignUpComponent
