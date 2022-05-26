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
  deleteField,
} from 'firebase/firestore'
import { async } from '@firebase/util'
import { useState, useEffect } from 'react'
import Link from 'next/link'

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
      inParty: true,
    })
  }

  const joinTeam = async (info) => {
    const userRef = collection(db, 'users')
    const specificUser = doc(userRef, user.displayName)
    const userInfo = await getDoc(specificUser)
    const inParty = userInfo.data().inParty
    if (inParty) {
      alert('You are already in a party!')
    } else {
      if (info.data().Room.players.length < info.data().Room.maxSize) {
        const userRef = collection(db, 'users')
        const partyLocation = doc(userRef, info.id)
        const specificUser = doc(userRef, user.displayName)
        await updateDoc(specificUser, {
          inParty: true,
        })
        await updateDoc(partyLocation, {
          Room: {
            ...info.data().Room,
            players: [...info.data().Room.players, user.displayName],
            size: info.data().Room.players.length + 1,
          },
        })
      } else {
        alert('team is full')
      }
    }
  }

  const leaveTeam = async (info) => {
    const userRef = collection(db, 'users')
    const partyLocation = doc(userRef, info.id)
    const specificUser = doc(userRef, user.displayName)
    await updateDoc(specificUser, {
      inParty: false,
    })
    await updateDoc(partyLocation, {
      Room: {
        ...info.data().Room,
        players: info
          .data()
          .Room.players.filter((player) => player !== user.displayName),
        size: info.data().Room.players.length - 1,
      },
    })
    console.log(info.data().Room.players.length)
    if (info.data().Room.players.length - 1 === 0) {
      console.log('This room should be deleted')
      await updateDoc(partyLocation, {
        Room: deleteField(),
      })
    }
  }

  useEffect((e) => {
    const showTeams = async () => {
      const q = query(collection(db, 'users'), where('Room.size', '<=', 3))
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const teams = []
        querySnapshot.forEach((doc) => {
          const currentPlayers = doc.data().Room.players
          const showButton = currentPlayers.includes(user.displayName)
            ? 'inline-block'
            : 'hidden'
          const hideButton = currentPlayers.includes(user.displayName)
            ? 'hidden'
            : 'inline-block'
          const fullTeam =
            currentPlayers.length === 3 ? 'bg-red-800' : 'bg-green-800'
          const fullDisplay = currentPlayers.length === 3 ? 'full' : ''
          const player1 = currentPlayers[0] ? currentPlayers[0] : ''
          const player2 = currentPlayers[1] ? currentPlayers[1] : ''
          const player3 = currentPlayers[2] ? currentPlayers[2] : ''
          teams.push(
            <div
              className={`flex items-center justify-around ${fullTeam} border-2 border-zinc-800 p-4 text-[12px]`}
              key={doc.id}
            >
              <h2>{doc.data().Room.owner}'s Room</h2>
              <div className="flex gap-3 border-l border-r pr-2 pl-2">
                {' '}
                <span className="flex">{doc.data().Room.players[0]}</span>{' '}
                <span className="flex">{doc.data().Room.players[1]}</span>{' '}
                <span className="flex">{doc.data().Room.players[2]}</span>
              </div>
              <h3>
                {doc.data().Room.players.length}/{doc.data().Room.maxSize}
              </h3>
              <div>
                <button
                  className={`rounded-xl bg-green-400 p-2 hover:bg-green-600 ${hideButton}`}
                  onClick={() => joinTeam(doc)}
                >
                  {' '}
                  Join Team{' '}
                </button>
                <button
                  className={`rounded-xl bg-red-900 p-2 hover:bg-red-700 ${showButton}`}
                  onClick={() => leaveTeam(doc)}
                >
                  {' '}
                  Leave{' '}
                </button>
              </div>
              <span className="text-lg font-medium"> {fullDisplay} </span>
            </div>
          )
        })
        setTeams(teams)
      })
    }
    showTeams()
  }, [])

  return (
    <div className=" min-h-screen p-2">
      <button
        className="mx-auto mb-2 flex justify-center bg-red-600 p-2 text-white"
        onClick={() => createTeam()}
      >
        {' '}
        Create a Team{' '}
      </button>
      <article className="mx-auto flex w-6/12 flex-col justify-center bg-zinc-800 p-4 text-white">
        <span> How This Works:</span>{' '}
        <span>
          {' '}
          Create a team, wait for users to join, add each other ingame,
          Dominate, Leave reviews of the players.{' '}
        </span>
      </article>
      <div className="pt-6 font-medium text-white">{teams}</div>
    </div>
  )
}

export default ActiveTeams
