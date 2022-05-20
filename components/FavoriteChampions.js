import React from 'react'
import { AuthFunctions } from '../src/AuthContext'
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
  collection,
  query,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../firebase-config'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const FavoriteChampions = ({ userData }) => {
  const [champions, setChampions] = useState([])
  const { user } = AuthFunctions()

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'users', userData.displayName), (doc) => {
      setChampions(doc.data().favoriteChamps)
    })
  }, [])

  const handleFavoriteChampion = async (e) => {
    const id = userData.id
    const docRef = doc(db, 'users', id)
    const getDocRef = getDoc(docRef)
    const champArray = (await getDocRef).data().favoriteChamps

    if (!champArray.includes(e)) {
      await updateDoc(docRef, {
        favoriteChamps: arrayUnion(e),
      })
    } else {
      await updateDoc(docRef, {
        favoriteChamps: arrayRemove(e),
      })
    }
  }

  return (
    <section>
      {/*===========================Desktop==================================*/}
      <section className="hidden w-full md:block">
        <fieldset className="grid grid-cols-6 gap-y-2 p-10 text-[12px] ">
          <legend className=" border bg-red-800 p-2 text-[16px]">
            Favorite Champions:
          </legend>

          <button
            value="Ash"
            className={`text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale `}
            onClick={(e) => handleFavoriteChampion('Ash')}
          >
            <Image src="/Ash.png" height={121} width={185}></Image>
          </button>

          <button
            value="Bangalore"
            className={`text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale `}
            onClick={(e) => handleFavoriteChampion('Bangalore')}
          >
            <Image src="/Bangalore.png" height={121} width={185}></Image>
          </button>

          <button
            value="Bloodhound"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Bloodhound')}
          >
            <Image src="/Bloodhound.png" height={121} width={185}></Image>
          </button>

          <button
            value="Caustic"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Caustic')}
          >
            <Image src="/Caustic.png" height={121} width={185}></Image>
          </button>

          <button
            value="Crypto"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Crypto')}
          >
            <Image src="/Crypto.png" height={121} width={185}></Image>
          </button>

          <button
            value="Fuse"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Fuse')}
          >
            <Image src="/Fuse.png" height={121} width={185}></Image>
          </button>

          <button
            value="Gibraltar"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Gibraltar')}
          >
            <Image src="/Gibraltar.png" height={121} width={185}></Image>
          </button>

          <button
            value="Horizon"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Horizon')}
          >
            <Image src="/Horizon.png" height={121} width={185}></Image>
          </button>

          <button
            value="Lifeline"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Lifeline')}
          >
            <Image src="/Lifeline.png" height={121} width={185}></Image>
          </button>

          <button
            value="Loba"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Loba')}
          >
            <Image src="/Loba.png" height={121} width={185}></Image>
          </button>

          <button
            value="Mad Maggie"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Mad Maggie')}
          >
            <Image src="/MadMaggie.png" height={121} width={185}></Image>
          </button>

          <button
            value="Mirage"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Mirage')}
          >
            <Image src="/Mirage.png" height={121} width={185}></Image>
          </button>

          <button
            value="Newcastle"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Newcastle')}
          >
            <Image src="/NewCastle.png" height={121} width={185}></Image>
          </button>

          <button
            value="Octane"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Octane')}
          >
            <Image src="/Octane.png" height={121} width={185}></Image>
          </button>

          <button
            value="Pathfinder"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Pathfinder')}
          >
            <Image src="/Pathfinder.png" height={121} width={185}></Image>
          </button>

          <button
            value="Rampart"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Rampart')}
          >
            <Image src="/Rampart.png" height={121} width={185}></Image>
          </button>

          <button
            value="Revenant"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Revenant')}
          >
            <Image src="/Revenant.png" height={121} width={185}></Image>
          </button>

          <button
            value="Seer"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Seer')}
          >
            <Image src="/Seer.png" height={121} width={185}></Image>
          </button>

          <button
            value="Valkyrie"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Valkyrie')}
          >
            <Image src="/Valkyrie.png" height={121} width={185}></Image>
          </button>

          <button
            value="Wattson"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Wattson')}
          >
            <Image src="/Wattson.png" height={121} width={185}></Image>
          </button>

          <button
            value="Wraith"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Wraith')}
          >
            <Image src="/Wraith.png" height={121} width={185}></Image>
          </button>
        </fieldset>
        <div className="flex w-full items-center gap-6 pt-2">
          <span className=" text-[12px]">Current Favorites: </span>
          <div className="flex flex-wrap gap-4">
            {champions.map((champion) => (
              <button
                className="text-[12px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
                key={champion}
                value={champion}
                onClick={(e) => handleFavoriteChampion(e.target.value)}
              >
                {champion}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/*==========================Mobile==========================*/}
      <section className="block w-full md:hidden">
        <fieldset className="grid grid-cols-2 gap-y-2 p-10 text-[12px] ">
          <legend className=" border bg-red-800 p-2 text-[16px]">
            Favorite Champions:
          </legend>

          <button
            value="Ash"
            className={`text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale `}
            onClick={(e) => handleFavoriteChampion('Ash')}
          >
            <Image src="/Ash.png" height={121} width={185}></Image>
          </button>

          <button
            value="Bangalore"
            className={`text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale `}
            onClick={(e) => handleFavoriteChampion('Bangalore')}
          >
            <Image src="/Bangalore.png" height={121} width={185}></Image>
          </button>

          <button
            value="Bloodhound"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Bloodhound')}
          >
            <Image src="/Bloodhound.png" height={121} width={185}></Image>
          </button>

          <button
            value="Caustic"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Caustic')}
          >
            <Image src="/Caustic.png" height={121} width={185}></Image>
          </button>

          <button
            value="Crypto"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Crypto')}
          >
            <Image src="/Crypto.png" height={121} width={185}></Image>
          </button>

          <button
            value="Fuse"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Fuse')}
          >
            <Image src="/Fuse.png" height={121} width={185}></Image>
          </button>

          <button
            value="Gibraltar"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Gibraltar')}
          >
            <Image src="/Gibraltar.png" height={121} width={185}></Image>
          </button>

          <button
            value="Horizon"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Horizon')}
          >
            <Image src="/Horizon.png" height={121} width={185}></Image>
          </button>

          <button
            value="Lifeline"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Lifeline')}
          >
            <Image src="/Lifeline.png" height={121} width={185}></Image>
          </button>

          <button
            value="Loba"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Loba')}
          >
            <Image src="/Loba.png" height={121} width={185}></Image>
          </button>

          <button
            value="Mad Maggie"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Mad Maggie')}
          >
            <Image src="/MadMaggie.png" height={121} width={185}></Image>
          </button>

          <button
            value="Mirage"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Mirage')}
          >
            <Image src="/Mirage.png" height={121} width={185}></Image>
          </button>

          <button
            value="Newcastle"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Newcastle')}
          >
            <Image src="/NewCastle.png" height={121} width={185}></Image>
          </button>

          <button
            value="Octane"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Octane')}
          >
            <Image src="/Octane.png" height={121} width={185}></Image>
          </button>

          <button
            value="Pathfinder"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Pathfinder')}
          >
            <Image src="/Pathfinder.png" height={121} width={185}></Image>
          </button>

          <button
            value="Rampart"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Rampart')}
          >
            <Image src="/Rampart.png" height={121} width={185}></Image>
          </button>

          <button
            value="Revenant"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Revenant')}
          >
            <Image src="/Revenant.png" height={121} width={185}></Image>
          </button>

          <button
            value="Seer"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Seer')}
          >
            <Image src="/Seer.png" height={121} width={185}></Image>
          </button>

          <button
            value="Valkyrie"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Valkyrie')}
          >
            <Image src="/Valkyrie.png" height={121} width={185}></Image>
          </button>

          <button
            value="Wattson"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Wattson')}
          >
            <Image src="/Wattson.png" height={121} width={185}></Image>
          </button>

          <button
            value="Wraith"
            className="text-[16px] font-medium hover:scale-110 hover:text-red-600 hover:grayscale"
            onClick={(e) => handleFavoriteChampion('Wraith')}
          >
            <Image src="/Wraith.png" height={121} width={185}></Image>
          </button>
        </fieldset>
        <div className="flex w-full items-center gap-6 pt-2">
          <span className=" text-[12px]">Current Favorites: </span>
          <div className="flex flex-wrap gap-4">
            {champions.map((champion) => (
              <button
                className="text-[12px] font-medium hover:text-red-600"
                key={champion}
                value={champion}
                onClick={(e) => handleFavoriteChampion(e.target.value)}
              >
                {champion}
              </button>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

export default FavoriteChampions
