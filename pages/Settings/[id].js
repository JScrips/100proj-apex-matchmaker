import React from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase-config'
import { AuthFunctions } from '../../src/AuthContext'
import Image from 'next/image'
import FavoriteChampions from '../../components/FavoriteChampions'
import FavoriteWeapons from '../../components/FavoriteWeapons'
import UploadAvatar from '../../components/UploadAvatar'
import Playstyle from '../../components/Playstyle'
import CurrentRank from '../../components/CurrentRank'

const Settings = ({ userData }) => {
  const { user } = AuthFunctions()

  return (
    <div className="min-h-screen bg-neutral-700 p-6 ">
      <article className=" text-md mx-auto flex min-h-screen  w-10/12  flex-col rounded-xl bg-zinc-800 p-4 font-medium text-white shadow-xl shadow-zinc-900">
        <h1 className="mb-10 text-center text-2xl font-medium">{`${userData.displayName}'s Account Settings`}</h1>
        <section className="flex flex-col items-center justify-between gap-20 border-b  border-zinc-700 pt-8 pb-8">
          <CurrentRank userData={userData} />
        </section>
        <section className="flex flex-col items-center justify-between gap-20 border-b  border-zinc-700 pt-8 pb-8">
          <FavoriteChampions userData={userData} />
        </section>
        <section className="flex flex-col items-center justify-between gap-20 border-b  border-zinc-700 pt-8 pb-8">
          <FavoriteWeapons userData={userData} />
        </section>
        <section className="flex flex-col items-center justify-between gap-20 border-b  border-zinc-700 pt-8 pb-8">
          <Playstyle />
        </section>
      </article>
    </div>
  )
}

export default Settings

export const getStaticPaths = async () => {
  const snapShot = await getDocs(collection(db, 'users'))
  const paths = snapShot.docs.map((doc) => {
    return { params: { id: doc.id } }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  /* ===========user data =========== */
  const snapshot = await getDocs(collection(db, 'users'))
  const user = snapshot.docs.find((doc) => doc.id === params.id)
  const userData = { ...user.data(), id: user.id }
  /*===========profile comments =========== */

  return { props: { userData } }
}
