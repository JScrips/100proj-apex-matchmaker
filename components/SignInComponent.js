import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AuthFunctions } from '../src/AuthContext'
import { useRouter } from 'next/router'
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  getDoc,
} from 'firebase/firestore'
import { db } from '../firebase-config'

const SignInComponent = () => {
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
      const person = await getDocs(userQuery)

      const endPoint = person.docs[0].id
      await signInUser(email, password)
      const userDisplay = person.docs[0].data().displayName
      await updateDoc(doc(db, 'users', userDisplay), {
        status: 'Online',
      })

      router.push(`/Profile/${endPoint}`)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <section className="relative min-h-screen py-20">
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
                    Sign In
                  </span>
                </div>
                <h3 className="font-heading mb-12 text-3xl font-medium text-red-800">
                  Welcome Back
                </h3>
                <div className="relative mb-6 flex flex-wrap">
                  <input
                    className="relative mb-2 w-full rounded border py-4 pl-4 text-sm md:mb-0"
                    type="email"
                    placeholder="e.g apex@royale.com"
                    onChange={(e) => setEmail(e.target.value)}
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
                  />
                  <span className="absolute top-0 left-0 ml-4 -mt-2 inline-block  rounded-xl bg-white px-1 text-xs font-medium text-red-800">
                    Password
                  </span>
                </div>
                <button
                  className="mb-4 inline-block w-full rounded bg-red-800 py-4 text-sm font-medium leading-normal text-white transition duration-200 hover:bg-red-300
              "
                  onClick={handleClick}
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 h-auto w-1/2 bg-red-800">
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
          src="/BloodHoundFace.jpg"
          width={1024}
          height={648}
          objectFit="cover"
          layout="fill"
        />
      </div>
    </section>
  )
}

export default SignInComponent
