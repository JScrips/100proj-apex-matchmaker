import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Search = () => {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
  const [champ, setChamp] = useState('')
  const [tier, setTier] = useState('')
  const [mode, setMode] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [manualInput, setManualInput] = useState('')

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
    const users = []
    querySnapshot.forEach((doc) => {
      users.push(doc.data())
    })

    const defaultQuery = query(userRef)
    const defaultSnapshot = await getDocs(defaultQuery)
    const fallback = []
    defaultSnapshot.forEach((doc) => {
      fallback.push(doc.data())
    })

    const manualQuery = query(userRef, where('displayName', '==', manualInput))
    const manualSnapshot = await getDocs(manualQuery)
    manualSnapshot.forEach((doc) => {
      users.push(doc.data())
    })

    const statusQuery = query(userRef, where('status', '==', status))
    const statusSnapshot = await getDocs(statusQuery)
    statusSnapshot.forEach((doc) => {
      users.push(doc.data())
    })

    const champQuery = query(userRef, where('currentChamp', '==', champ))
    const champSnapshot = await getDocs(champQuery)
    champSnapshot.forEach((doc) => {
      users.push(doc.data())
    })

    const tierQuery = query(userRef, where('tier', '==', tier))
    const tierSnapshot = await getDocs(tierQuery)
    tierSnapshot.forEach((doc) => {
      users.push(doc.data())
    })

    const modeQuery = query(userRef, where('mode', '==', mode))
    const modeSnapshot = await getDocs(modeQuery)
    modeSnapshot.forEach((doc) => {
      users.push(doc.data())
    })

    if (users.length === 0) {
      alert('No users found with those params')
      setUsers(fallback)
    } else if (users.length >= 1) {
      setUsers(users)
    }
  }

  return (
    <div className="flex min-h-screen min-w-full flex-col p-2">
      <div className="flex flex-col">
        <h1 className=" text-center text-white">Search Players</h1>
        <input
          className="mx-auto w-full bg-zinc-800  p-2 text-white lg:w-6/12"
          placeholder="Dominator (case-sensitive)"
          onChange={(e) => setManualInput(e.target.value)}
        />
        <div className="text-center text-white">OR</div>
        <div className="flex flex-col gap-10 p-4 sm:hidden">
          <select
            className="bg-zinc-800 text-white"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Online Status</option>
            <option value="Online">Online</option>
            <option value="Busy">Busy</option>
            <option value="Offline">Offline</option>
          </select>
          <select
            className="bg-zinc-800 text-white"
            onChange={(e) => setChamp(e.target.value)}
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
          <select
            className="bg-zinc-800 text-white"
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="">Select Mode</option>
            <option value="Battle Royale">Battle Royale</option>
            <option value="Arena">Arena</option>
            <option value="Training">Training</option>
            <option value="Seasonal">Seasonal</option>
          </select>
          <select
            className="bg-zinc-800 text-white"
            onChange={(e) => setTier(e.target.value)}
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
        </div>

        {/*========================DESKTOP=======================================*/}
        <div className="hidden gap-10 p-4 md:flex md:justify-center">
          <select
            className="bg-zinc-800 text-white"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Online Status</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
          <select
            className="bg-zinc-800 text-white"
            onChange={(e) => setChamp(e.target.value)}
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
          <select
            className="bg-zinc-800 text-white"
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="">Select Mode</option>
            <option value="Battle Royale">Battle Royale</option>
            <option value="Arena">Arena</option>
            <option value="Training">Training</option>
            <option value="Seasonal">Seasonal</option>
          </select>
          <select
            className="bg-zinc-800 text-white"
            onChange={(e) => setTier(e.target.value)}
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
        </div>
        <button
          className="mx-auto mb-4 rounded-xl bg-red-600 p-2 text-white hover:bg-red-900 lg:w-1/12"
          onClick={() => handleSearch()}
        >
          Search{' '}
        </button>
      </div>
      <div className="text-white lg:grid lg:grid-cols-6 lg:grid-rows-4 lg:gap-4 ">
        {users.map((champ) => {
          const tierFiller = champ.tier ? champ.tier : 'N/A'
          const champFiller = champ.currentChamp ? champ.currentChamp : 'N/A'
          const modeFiller = champ.mode ? champ.mode : 'N/A'
          return (
            <Link href={`/Profile/${champ.displayName}`}>
              <a>
                <div
                  key={champ}
                  className="mb-2 flex items-center justify-between gap-2 rounded-lg bg-zinc-900 p-2 text-white hover:cursor-pointer hover:bg-zinc-800 lg:flex-col"
                >
                  <div className="flex flex-col items-center gap-2 p-4">
                    <Image
                      src={champ.photoURL}
                      width={70}
                      height={70}
                      className="rounded-full"
                      objectFit="cover"
                    />
                    <span>{champ.displayName}</span>
                  </div>
                  <div className="mb-2 hidden gap-2 text-[14px] lg:block">
                    {tierFiller}
                  </div>
                  <div className=" hidden gap-2 lg:flex">
                    <span className="rounded-full bg-red-600 p-1 text-[10px] font-medium">
                      Aggressive{' '}
                    </span>
                    <span className="rounded-full bg-green-600 p-1 text-[10px] font-medium">
                      Tactical{' '}
                    </span>
                    <span className="rounded-full bg-black p-1 text-[10px] font-medium">
                      3rd Party{' '}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 lg:hidden">
                    <span className="rounded-full bg-red-600 p-1 text-[10px] font-medium">
                      Aggressive{' '}
                    </span>
                    <span className="rounded-full bg-green-600 p-1 text-[10px] font-medium">
                      Tactical{' '}
                    </span>
                    <span className="rounded-full bg-black p-1 text-[10px] font-medium">
                      3rd Party{' '}
                    </span>
                  </div>

                  <div className="hidden text-[18px] lg:block">
                    {modeFiller} - {champFiller}
                  </div>

                  <div className="mt-4 gap-2 text-right">{champ.status}</div>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Search

export const handleSearch = async () => {
  const userRef = collection(db, 'users')

  const userQuery = query(
    userRef,
    where('status', '==', status),
    where('currentChamp', '==', champ),
    where('tier', '==', tier),
    where('mode', '==', mode)
  )
  const querySnapshot = await getDocs(userQuery)
  const users = []
  querySnapshot.forEach((doc) => {
    users.push(doc.data())
  })

  const defaultQuery = query(userRef)
  const defaultSnapshot = await getDocs(defaultQuery)
  const fallback = []
  defaultSnapshot.forEach((doc) => {
    fallback.push(doc.data())
  })

  const manualQuery = query(userRef, where('displayName', '==', manualInput))
  const manualSnapshot = await getDocs(manualQuery)
  manualSnapshot.forEach((doc) => {
    users.push(doc.data())
  })

  const statusQuery = query(userRef, where('status', '==', status))
  const statusSnapshot = await getDocs(statusQuery)
  statusSnapshot.forEach((doc) => {
    users.push(doc.data())
  })

  const champQuery = query(userRef, where('currentChamp', '==', champ))
  const champSnapshot = await getDocs(champQuery)
  champSnapshot.forEach((doc) => {
    users.push(doc.data())
  })

  const tierQuery = query(userRef, where('tier', '==', tier))
  const tierSnapshot = await getDocs(tierQuery)
  tierSnapshot.forEach((doc) => {
    users.push(doc.data())
  })

  const modeQuery = query(userRef, where('mode', '==', mode))
  const modeSnapshot = await getDocs(modeQuery)
  modeSnapshot.forEach((doc) => {
    users.push(doc.data())
  })

  if (users.length === 0) {
    alert('No users found with those params')
    setUsers(fallback)
  } else if (users.length >= 1) {
    setUsers(users)
  }
}
