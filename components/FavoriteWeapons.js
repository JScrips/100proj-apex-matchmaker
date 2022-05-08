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

const FavoriteWeapons = ({ userData }) => {
  const [weapons, setWeapons] = useState([])
  const { user } = AuthFunctions()

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'users', userData.displayName), (doc) => {
      setWeapons(doc.data().favoriteGuns)
    })
  }, [])

  const handleFavoriteWeapon = async (e) => {
    const id = userData.id
    const docRef = doc(db, 'users', id)
    const getDocRef = getDoc(docRef)
    const weaponArray = (await getDocRef).data().favoriteGuns

    if (!weaponArray.includes(e)) {
      await updateDoc(docRef, {
        favoriteGuns: arrayUnion(e),
      })
    } else {
      await updateDoc(docRef, {
        favoriteGuns: arrayRemove(e),
      })
    }
  }

  return (
    <section className="w-full">
      <fieldset className="grid grid-cols-4  gap-x-20 gap-y-4 border p-10">
        <legend className=" border bg-red-800 p-2 text-[14px]">
          Favorite Weapons:
        </legend>
        <div className="text-[12px]">
          <h1 className="mb-1 border-b border-gray-600 text-[10px]">
            {' '}
            Assault Rifles
          </h1>
          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            value="Havoc"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
          >
            Havoc
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            value="Flatline"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
          >
            Flatline
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            value="Hemlok"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
          >
            Hemlok
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            value="Carbine"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
          >
            Carbine
          </button>
        </div>

        <div className="text-[12px]">
          <h1
            className="mb-1 border-b border-gray-600 text-[10px]"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
          >
            {' '}
            Submachine Guns
          </h1>

          <button
            value="Alternator"
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
          >
            Alternator
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Prowler"
          >
            Prowler
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="R-99"
          >
            R-99
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Volt"
          >
            Volt
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="C.A.R."
          >
            C.A.R.
          </button>
        </div>

        <div className="text-[12px]">
          <h1 className="mb-1 border-b border-gray-600 text-[10px]">
            {' '}
            Light Machine Guns
          </h1>
          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Devotion"
          >
            Devotion
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="L-Star"
          >
            L-Star
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Spitfire"
          >
            Spitfire
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Rampage"
          >
            Rampage
          </button>
        </div>

        <div className="text-[12px]">
          <h1 className="mb-1 border-b border-gray-600 text-[10px]">
            {' '}
            Marksman Weapons
          </h1>
          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="G7 Scout"
          >
            G7 Scout
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Triple Take"
          >
            Triple Take
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="30-30 Repeater"
          >
            30-30 Repeater
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Bocek"
          >
            Bocek
          </button>
        </div>

        <div className="text-[12px]">
          <h1 className="mb-1 border-b border-gray-600 text-[10px]">
            {' '}
            Sniper Rifles
          </h1>
          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Charge Rifle"
          >
            Charge Rifle
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Longbow"
          >
            Longbow
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Kraber"
          >
            {' '}
            Kraber
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Sentinel"
          >
            Sentinel
          </button>
        </div>

        <div className="text-[12px]">
          <h1 className="mb-1 border-b border-gray-600 text-[10px]">
            {' '}
            Shotguns
          </h1>
          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Eva-8"
          >
            Eva-8
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Mastiff"
          >
            Mastiff
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Mozambique"
          >
            Mozambique
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Peacekeeper"
          >
            Peacekeeper
          </button>
        </div>

        <div className="text-[12px]">
          <h1 className="mb-1 border-b border-gray-600 text-[10px] ">
            {' '}
            Pistols
          </h1>
          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="RE-45"
          >
            RE-45
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="P2020"
          >
            P2020
          </button>

          <button
            className="flex items-center gap-4 font-medium hover:text-red-600"
            onClick={(e) => handleFavoriteWeapon(e.target.value)}
            value="Wingman"
          >
            Wingman
          </button>
        </div>
      </fieldset>
      <div className="flex w-full items-center gap-6 pt-2 ">
        <span className=" text-[12px]">Current Favorites: </span>
        <div className="flex flex-wrap gap-4">
          {weapons.map((wep) => (
            <button
              className="text-[12px] font-medium hover:text-red-500"
              value={wep}
              key={wep}
              onClick={(e) => handleFavoriteWeapon(e.target.value)}
            >
              {wep}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FavoriteWeapons
