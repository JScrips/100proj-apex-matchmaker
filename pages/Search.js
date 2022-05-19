import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Search = () => {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
  const [champ, setChamp] = useState('')
  const [tier, setTier] = useState('')
  const [mode, setMode] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  const handleSearch = async () => {
    const userRef = collection(db, 'users')
    const userQuery = query(
      userRef,
      where('status', '==', status),
      where('currentChamp', '==', champ),
      where('tier', '==', tier),
      where('mode', '==', mode)
    )
    const querySnapshot = await getDocs(userQuery)
    console.log(querySnapshot)
    const users = []
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      users.push(doc.data())
    })
    if (users.length === 0) {
      setError(
        `No users found with the following criteria:  ${status}, ${champ}, ${mode}, ${tier}`
      )
    } else {
      setError('')
    }
    setUsers(users)
  }

  return (
    <div className="flex min-h-screen min-w-full flex-col p-2">
      <div className="flex flex-col">
        <h1 className=" text-center text-white">Search Players</h1>
        <div className="flex flex-col gap-10 p-4 sm:hidden">
          <select onChange={(e) => setStatus(e.target.value)}>
            <option value="">Online Status</option>
            <option value="Online">Online</option>
            <option value="Busy">Busy</option>
            <option value="Offline">Offline</option>
          </select>
          <select onChange={(e) => setChamp(e.target.value)}>
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
          <select onChange={(e) => setMode(e.target.value)}>
            <option value="">Select Mode</option>
            <option value="Battle Royale">Battle Royale</option>
            <option value="Arena">Arena</option>
            <option value="Training">Training</option>
            <option value="Seasonal">Seasonal</option>
          </select>
          <select onChange={(e) => setTier(e.target.value)}>
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
          <button
            className="rounded-xl bg-red-600 p-2 text-white hover:bg-red-900"
            onClick={() => handleSearch()}
          >
            Search{' '}
          </button>
        </div>
        {/*========================DESKTOP=======================================*/}
        <div className="hidden gap-10 p-4 md:flex md:justify-center">
          <select onChange={(e) => setStatus(e.target.value)}>
            <option value="">Online Status</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
          <select onChange={(e) => setChamp(e.target.value)}>
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
          <select onChange={(e) => setMode(e.target.value)}>
            <option value="">Select Mode</option>
            <option value="Battle Royale">Battle Royale</option>
            <option value="Arena">Arena</option>
            <option value="Training">Training</option>
            <option value="Seasonal">Seasonal</option>
          </select>
          <select onChange={(e) => setTier(e.target.value)}>
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
          <button
            className="rounded-xl bg-red-600 p-2 text-white hover:bg-red-900"
            onClick={() => handleSearch()}
          >
            Search{' '}
          </button>
        </div>
      </div>
      <div className="text-white">
        {users.length != 0 ? (
          users.map((champ) => {
            return (
              <div
                key={champ}
                className="flex  gap-36 rounded bg-red-600 p-1 text-justify font-medium text-white hover:bg-red-800"
              >
                <Link href={`/Profile/${champ.displayName}`}>
                  <a>{champ.displayName}</a>
                </Link>
                <span> Playing as: {champ.currentChamp} </span>
                <span> Current Tier: {champ.tier} </span>
                <span> Status: {champ.status} </span>
                <span>Current Mode: {champ.mode} </span>
              </div>
            )
          })
        ) : (
          <div className="text-center">{error}</div>
        )}
      </div>
    </div>
  )
}

export default Search
