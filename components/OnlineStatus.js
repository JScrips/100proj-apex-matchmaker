import { useState, useEffect } from 'react'
import { AuthFunctions } from '../src/AuthContext'
import { doc, updateDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase-config'

const OnlineStatus = ({ userData }) => {
  const { user } = AuthFunctions()
  const [status, setStatus] = useState('')
  const [showStatusInfo, setShowStatusInfo] = useState(userData.status)

  const profileOwner = user.displayName === userData.displayName
  const shouldShow = profileOwner ? 'block' : 'hidden'
  const docRef = doc(db, 'users', userData.displayName)

  const handleStatus = async (e) => {
    await updateDoc(docRef, {
      status: e,
    })
  }

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'users', userData.displayName), (doc) => {
      setStatus(doc.data().status)
    })
  }, [])

  useEffect(() => {
    const showStatus = () => {
      if (status === 'Online') {
        setShowStatusInfo(
          <div className="flex justify-center">
            <span className="text-green-700">{status}</span>
            <svg
              width="40"
              height="40"
              viewBox="100 100 1400 1200"
              xmlns="http://www.w3.org/2000/svg"
              className=" animate-ping text-green-700"
            >
              <path
                d="m800.151515 100 515.151515 878.787879L1163.787879 1100 874.767918 903.070992h167.68392L800.151515 478.787879l-241.52721 424.283113h165.875059L436.515152 1100 285 978.787879z"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
            <svg
              width="40"
              height="40"
              viewBox="100 100 1400 1200"
              xmlns="http://www.w3.org/2000/svg"
              className=" -translate-x-8 text-green-700"
            >
              <path
                d="m800.151515 100 515.151515 878.787879L1163.787879 1100 874.767918 903.070992h167.68392L800.151515 478.787879l-241.52721 424.283113h165.875059L436.515152 1100 285 978.787879z"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
          </div>
        )
      } else if (status === 'Offline') {
        setShowStatusInfo(
          <div className="flex justify-center">
            <span className="text-red-900">{status}</span>
            <svg
              width="40"
              height="40"
              viewBox="100 100 1400 1200"
              xmlns="http://www.w3.org/2000/svg"
              className=" text-red-900"
            >
              <path
                d="m800.151515 100 515.151515 878.787879L1163.787879 1100 874.767918 903.070992h167.68392L800.151515 478.787879l-241.52721 424.283113h165.875059L436.515152 1100 285 978.787879z"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
          </div>
        )
      } else if (status === 'Invisible') {
        setShowStatusInfo(
          <div className="flex justify-center">
            <span className="text-white">{status}</span>
            <svg
              width="40"
              height="40"
              viewBox="100 100 1400 1200"
              xmlns="http://www.w3.org/2000/svg"
              className=" animate-pulse text-white"
            >
              <path
                d="m800.151515 100 515.151515 878.787879L1163.787879 1100 874.767918 903.070992h167.68392L800.151515 478.787879l-241.52721 424.283113h165.875059L436.515152 1100 285 978.787879z"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
          </div>
        )
      } else if (status === 'Busy') {
        setShowStatusInfo(
          <div className="flex justify-center gap-2">
            <span className="text-yellow-700">{status}</span>
            <svg
              width="40"
              height="40"
              viewBox="100 100 1400 1200"
              xmlns="http://www.w3.org/2000/svg"
              className=" animate-ping text-yellow-700"
            >
              <path
                d="m800.151515 100 515.151515 878.787879L1163.787879 1100 874.767918 903.070992h167.68392L800.151515 478.787879l-241.52721 424.283113h165.875059L436.515152 1100 285 978.787879z"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
          </div>
        )
      } else {
        setShowStatusInfo('')
      }
    }
    showStatus()
  }, [status])

  return (
    <div className={`flex w-11/12 flex-col p-6`}>
      {showStatusInfo}
      <select
        className={` bg-zinc-900 text-white ${shouldShow}`}
        onChange={(e) => handleStatus(e.target.value)}
      >
        <option value="">Online Status</option>
        <option value="Online">Online</option>
        <option value="Busy">Busy</option>
        <option value="Invisible">Invisible</option>
        <option value="Offline">Offline</option>
      </select>
    </div>
  )
}

export default OnlineStatus
