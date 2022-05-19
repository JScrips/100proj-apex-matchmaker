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
  increment,
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
    console.log(info.data().Room.players)
    if (info.data().Room.players.length < info.data().Room.maxSize) {
      const userRef = collection(db, 'users')
      const partyLocation = doc(userRef, info.id)
      await updateDoc(partyLocation, {
        Room: {
          ...info.data().Room,
          players: [...info.data().Room.players, user.displayName],
          size: increment(1),
        },
      })
    } else {
      alert('team is full')
    }
  }

  useEffect((e) => {
    const showTeams = async () => {
      const q = query(collection(db, 'users'), where('Room.size', '<', 3))
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const teams = []
        querySnapshot.forEach((doc) => {
          teams.push(
            <div
              className="flex gap-6 bg-red-600 p-4 hover:cursor-pointer hover:bg-red-700"
              onClick={() => joinTeam(doc)}
              key={doc.id}
            >
              <h2>{doc.data().Room.owner}'s Room</h2>
              <div className="flex gap-3 border-l border-r pr-2 pl-2">
                <span className="flex">{doc.data().Room.players[0]}</span>
                <span className="flex">{doc.data().Room.players[1]}</span>
                <span className="flex">{doc.data().Room.players[2]}</span>
              </div>
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
