import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useState, useEffect } from 'react'
import Link from 'next/dist/client/link'

const Userlist = () => {
  const [users, setUsers] = useState([])
  useEffect((e) => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))
      const users = querySnapshot.docs.map((doc) => {
        return (
          <Link href={`/Profile/${doc.data().displayName}`}>
            <a className="rounded bg-red-600 p-1 font-medium text-white hover:bg-red-800">
              {doc.data().displayName}
            </a>
          </Link>
        )
      })
      setUsers(users)
    }
    getUsers()
  }, [])

  return (
    <div className="flex min-h-screen flex-col gap-2 bg-zinc-800 p-10">
      <h1 className="mb-2 text-center text-7xl text-white"> Users </h1>
      <div className="mx-auto flex w-6/12 flex-col gap-2 text-center">
        {users}
      </div>
    </div>
  )
}

export default Userlist
