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
    <section className="w-full">
      <fieldset className="grid grid-cols-4  gap-x-36 gap-y-2  border p-10 text-[12px]">
        <legend className=" border bg-red-800 p-2 text-[14px]">
          Favorite Champions:
        </legend>

        <button
          value="Ash"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Ash{' '}
        </button>

        <button
          value="Bangalore"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Bangalore{' '}
        </button>

        <button
          value="Bloodhound"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Bloodhound{' '}
        </button>

        <button
          value="Caustic"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Caustic{' '}
        </button>

        <button
          value="Crypto"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Crypto{' '}
        </button>

        <button
          value="Fuse"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Fuse{' '}
        </button>

        <button
          value="Gibraltar"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Gibraltar{' '}
        </button>

        <button
          value="Horizon"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Horizon{' '}
        </button>

        <button
          value="Lifeline"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Lifeline{' '}
        </button>

        <button
          value="Loba"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Loba{' '}
        </button>

        <button
          value="Mad Maggie"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Mad Maggie{' '}
        </button>

        <button
          value="Mirage"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Mirage{' '}
        </button>

        <button
          value="Newcastle"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Newcastle{' '}
        </button>

        <button
          value="Octane"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Octane{' '}
        </button>

        <button
          value="Pathfinder"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Pathfinder{' '}
        </button>

        <button
          value="Rampart"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Rampart{' '}
        </button>

        <button
          value="Revenant"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Revenant{' '}
        </button>

        <button
          value="Seer"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Seer{' '}
        </button>

        <button
          value="Valkyrie"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Valkyrie{' '}
        </button>

        <button
          value="Wattson"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Wattson{' '}
        </button>

        <button
          value="Wraith"
          className="text-[14px] font-medium hover:text-red-600"
          onClick={(e) => handleFavoriteChampion(e.target.value)}
        >
          {' '}
          Wraith{' '}
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
  )
}

export default FavoriteChampions
