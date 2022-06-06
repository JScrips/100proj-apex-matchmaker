import Image from 'next/image'
import { useState, useEffect } from 'react'
import { storage } from '../firebase-config'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from 'firebase/storage'
import { doc, updateDoc, onSnapshot, getDoc } from 'firebase/firestore'
import { AuthFunctions } from '../src/AuthContext'
import { db } from '../firebase-config'
import { updateProfile } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useRouter } from 'next/router'

const UploadAvatar = ({ userData }) => {
  const [file, setFile] = useState('')
  const [url, setUrl] = useState('')
  const [avatar, setAvatar] = useState('')
  const { user } = AuthFunctions()
  const show = avatar ? avatar : '/apexLogo.png'
  const router = useRouter()

  useEffect(async () => {
    const docRef = doc(db, 'users', userData.displayName)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      setAvatar(docSnap.data().photoURL)
    }
  }, [avatar])

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    const imgRef = ref(storage, `avatars/${userData.displayName}`)
    const docRef = doc(db, `users/${userData.displayName}`)
    try {
      uploadBytes(imgRef, file).then(() => {
        getDownloadURL(imgRef).then((url) => {
          updateDoc(docRef, {
            photoURL: url,
          })
          updateProfile(auth.currentUser, {
            photoURL: url,
          })
        })
      })

      setFile('')
      alert('Avatar updated!')
      router.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className=" flex flex-col gap-4 rounded-lg bg-zinc-800 text-center">
      <Image
        src={show}
        width={400}
        height={400}
        objectFit="cover"
        className="rounded-full"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className=" font-medium text-white"
      />
      <button
        className="mx-auto w-5/12 bg-red-600 p-2 font-medium text-white hover:cursor-pointer hover:bg-red-800"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  )
}

export default UploadAvatar
