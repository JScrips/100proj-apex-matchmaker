import React from 'react'
import {
  doc,
  updateDoc,
  arrayRemove,
  arrayUnion,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../firebase-config'
import { useState, useEffect } from 'react'

const CurrentRank = ({ userData }) => {
  const [rank, setRank] = useState('')
  const [tier, setTier] = useState('')
  const docRef = doc(db, 'users', userData.displayName)

  const handleRank = async (e) => {
    await updateDoc(docRef, {
      currentRank: e,
    })
  }

  const handleTier = async (e) => {
    await updateDoc(docRef, {
      currentTier: e,
    })
  }

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'users', userData.displayName), (doc) => {
      setRank(doc.data().currentRank)
      setTier(doc.data().currentTier)
    })
  }, [])

  return (
    <div>
      <div className="flex justify-center gap-2 pb-4 text-4xl">
        <span>
          {rank} {tier}
        </span>
      </div>
      <div className="flex gap-2 text-[10px]">
        Rank:
        <div className="flex gap-2">
          <select
            className="bg-zinc-900 text-white"
            onChange={(e) => handleRank(e.target.value)}
          >
            <option value="">Rank</option>

            <option value="Rookie">Rookie</option>

            <option value="Bronze">Bronze</option>

            <option value="Silver">Silver</option>

            <option value="Gold">Gold</option>

            <option value="Platinum">Platinum</option>

            <option value="Diamond">Diamond</option>

            <option value="Master">Master</option>

            <option value="Apex Predator">Apex Predator</option>
          </select>

          <select
            className="bg-zinc-900 text-white"
            onChange={(e) => handleTier(e.target.value)}
          >
            <option value="">Tier</option>
            <option value="I"> I</option>
            <option value="II"> II</option>
            <option value="III"> III</option>
            <option value="IV"> IV</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default CurrentRank
