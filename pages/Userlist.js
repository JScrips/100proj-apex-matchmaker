import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useState, useEffect } from 'react'
import Link from 'next/dist/client/link'
import Image from 'next/image'

const Userlist = () => {
  const [users, setUsers] = useState([])
  useEffect((e) => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))
      console.log(querySnapshot.docs[0].data())
      const users = querySnapshot.docs.map((doc) => {
        return (
          <Link href={`/Profile/${doc.data().displayName}`}>
            <a className="hover:cursor-pointer">
              <article className="mb-2">
                <section className="flex items-center justify-between bg-zinc-900 p-2 text-white hover:bg-zinc-600">
                  <div className="flex flex-col gap-2">
                    <Image
                      src={doc.data().photoURL}
                      width={50}
                      height={50}
                      objectFit="cover"
                      className=" rounded-full"
                    />
                    <span className="text-sm font-medium">
                      {doc.data().displayName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className="rounded-full bg-red-600 p-1">
                      {' '}
                      Aggressive{' '}
                    </span>
                    <span className="rounded-full bg-black p-1">
                      {' '}
                      3rd Party{' '}
                    </span>
                    <span className="rounded-full bg-green-600 p-1">
                      {' '}
                      Patient{' '}
                    </span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <span className="text-right">
                      {doc.data().currentRank}
                      {doc.data().currentTier}
                    </span>
                    <span className="text-right text-xs">
                      {doc.data().status}
                    </span>
                  </div>
                </section>
              </article>
            </a>
          </Link>
        )
      })
      setUsers(users)
    }
    getUsers()
  }, [])

  return (
    <div className="flex min-h-screen flex-col gap-2 bg-zinc-800 p-2">
      <h1 className="mb-2 text-center text-7xl text-white"> Users </h1>
      <div>{users}</div>
    </div>
  )
}

export default Userlist
