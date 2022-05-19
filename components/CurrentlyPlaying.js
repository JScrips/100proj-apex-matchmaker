import { updateDoc, doc, onSnapshot, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useState, useEffect } from 'react'
import { AuthFunctions } from '../src/AuthContext'
import { useRouter } from 'next/router'

const CurrentlyPlaying = ({ userData }) => {
  const [mode, setMode] = useState('')
  const [tier, setTier] = useState('')
  const [champ, setChamp] = useState('')
  const { user } = AuthFunctions()
  const router = useRouter()

  const profileOwner =
    user.displayName === userData.displayName ? 'block' : 'hidden'
  const updateChamp = async (e) => {
    const userRef = doc(db, 'users', userData.displayName)
    await updateDoc(userRef, {
      currentChamp: e,
    })
  }
  const updateTier = async (e) => {
    const userRef = doc(db, 'users', userData.displayName)
    await updateDoc(userRef, {
      tier: e,
    })
  }
  const updateMode = async (e) => {
    const userRef = doc(db, 'users', userData.displayName)
    await updateDoc(userRef, {
      mode: e,
    })
  }

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'users', userData.displayName), (doc) => {
      setMode(doc.data().mode)
      setTier(doc.data().tier)
      setChamp(doc.data().currentChamp)
    })
  }, [])

  const handleSearch = async () => {
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
    router.push('/ActiveTeams')
  }

  return (
    <div className={`mt-10 flex w-full flex-col gap-4 text-xs ${profileOwner}`}>
      <span className="text-white">I am currently Playing:</span>
      <span className="text-xl font-medium text-white">{champ} </span>
      <select
        className="bg-zinc-900 text-white"
        onChange={(e) => updateChamp(e.target.value)}
      >
        <option value="">Select Champion</option>
        <option value="Ash">Ash</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Bloodhound">Bloodhound</option>
        <option value="Caustic">Caustic</option>
        <option value="Crypto">Crypto</option>
        <option value="Fuse">Fuse</option>
        <option value="Gibraltar">Gibraltar</option>
        <option value="Horizon">Horizon</option>
        <option value="Lifeline">Lifeline</option>
        <option value="Loba">Loba</option>
        <option value="Mad Maggie">Mad Maggie</option>
        <option value="Mirage">Mirage</option>
        <option value="Newcastle">Newcastle</option>
        <option value="Pathfinder">Pathfinder</option>
        <option value="Rampart">Rampart</option>
        <option value="Revenant">Revenant</option>
        <option value="Seer">Seer</option>
        <option value="Valkyrie">Valkyrie</option>
        <option value="Wattson">Wattson</option>
        <option value="Wraith">Wraith</option>
      </select>
      <span className="text-xl font-medium text-white">{tier} </span>
      <select
        className="bg-zinc-900 text-white"
        onChange={(e) => updateTier(e.target.value)}
      >
        <option value="">Select Tier</option>
        <option value="Rookie">Rookie</option>
        <option value="Bronze">Bronze</option>
        <option value="Silver">Silver</option>
        <option value="Gold">Gold</option>
        <option value="Platinum">Platinum</option>
        <option value="Diamond">Diamond</option>
        <option value="Master">Master</option>
        <option value="Apex Predator">Apex Predator</option>
      </select>
      <span className="text-xl font-medium text-white">{mode} </span>
      <select
        className="bg-zinc-900 text-white"
        onChange={(e) => updateMode(e.target.value)}
      >
        <option value="">Select Game Mode</option>
        <option value="Battle Royale">Battle Royale</option>
        <option value="Arena">Arena</option>
        <option value="Training">Training</option>
        <option value="Seasonal">Seasonal</option>
      </select>
      <button
        className="bg-red-600 p-3 font-medium text-white hover:bg-red-800"
        onClick={() => handleSearch()}
      >
        {' '}
        Create a Team{' '}
      </button>
    </div>
  )
}

export default CurrentlyPlaying
