import { AuthFunctions } from '../src/AuthContext'
import { db } from '../firebase-config'
import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  onSnapshot,
  query,
  where,
  arrayUnion,
} from 'firebase/firestore'
import { async } from '@firebase/util'
import { useState, useEffect } from 'react'

const ActiveTeams = () => {
  const [teams, setTeams] = useState('')

  const { user } = AuthFunctions()

  const createTeam = async () => {
    const userRef = collection(db, 'users')
    const partyLocation = doc(userRef, user.displayName)
    await updateDoc(partyLocation, {
      Room: {
        owner: user.displayName,
        players: [user.displayName],
        size: 1,
        maxSize: 3,
      },
    })
  }

  const joinTeam = async (info) => {
    console.log(info.data().Room)
    const userRef = collection(db, 'users')
    const partyLocation = doc(userRef, info.id)
    await updateDoc(partyLocation, {
      Room: {
        ...info.data().Room,
        players: arrayUnion(user.displayName),
        size: info.data().Room.size + 1,
      },
    })
  }

  useEffect((e) => {
    const showTeams = async () => {
      const q = query(collection(db, 'users'), where('Room.size', '<', 3))
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const teams = []
        querySnapshot.forEach((doc) => {
          teams.push(
            <div
              className="flex justify-around gap-6 bg-red-600 p-4 hover:cursor-pointer hover:bg-red-700"
              onClick={() => joinTeam(doc)}
              key={doc.id}
            >
              <h2>{doc.data().Room.owner}'s Room</h2>
              <h3>{doc.data().Room.players}</h3>
              <h3>
                {doc.data().Room.players.length}/{doc.data().Room.maxSize}
              </h3>
            </div>
          )
        })
        setTeams(teams)
      })
    }
    showTeams()
  }, [])

  return (
    <div>
      <button
        className="mb-2 bg-red-600 p-2 text-white"
        onClick={() => createTeam()}
      >
        {' '}
        Create a Team{' '}
      </button>

      <div className="text-white">{teams}</div>
    </div>
  )
}

export default ActiveTeams
