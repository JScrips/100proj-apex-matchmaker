import React from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'
import {
  doc,
  updateDoc,
  collection,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from 'firebase/firestore'
import { AuthFunctions } from '../src/AuthContext'
import { db } from '../firebase-config'
import { useState, useEffect } from 'react'

const LikeButtons = ({ name, likes, dislikes, id }) => {
  const [likeCount, setLikeCount] = useState(0)
  const [dislikeCount, setDislikeCount] = useState(0)

  const { user } = AuthFunctions()
  const commentRef = collection(db, `users/${name}/profComments`)

  const handleLike = async (e) => {
    e.preventDefault()
    if (!likes?.includes(user.uid) && !dislikes?.includes(user.uid)) {
      updateDoc(doc(commentRef, id), {
        likes: arrayUnion(user.uid),
      })
      console.log('liked')
    } else if (dislikes?.includes(user.uid)) {
      updateDoc(doc(commentRef, id), {
        likes: arrayUnion(user.uid),
        dislikes: arrayRemove(user.uid),
      })
      console.log('unliked')
    } else {
      updateDoc(doc(commentRef, id), {
        likes: arrayRemove(user.uid),
      })
      console.log('disliked')
    }
  }

  const handleDislike = async (e) => {
    e.preventDefault()
    if (!likes?.includes(user.uid) && !dislikes?.includes(user.uid)) {
      updateDoc(doc(commentRef, id), {
        dislikes: arrayUnion(user.uid),
      })
      console.log('disliked')
    } else if (likes?.includes(user.uid)) {
      updateDoc(doc(commentRef, id), {
        dislikes: arrayUnion(user.uid),
        likes: arrayRemove(user.uid),
      })
      console.log('unliked')
    } else {
      updateDoc(doc(commentRef, id), {
        dislikes: arrayRemove(user.uid),
      })
      console.log('undisliked')
    }
  }

  const unsub = onSnapshot(doc(commentRef, id), (docSnapshot) => {
    if (docSnapshot.exists && docSnapshot.data().likes) {
      setLikeCount(docSnapshot.data().likes.length)
    }
    if (docSnapshot.exists && docSnapshot.data().dislikes) {
      setDislikeCount(docSnapshot.data().dislikes.length)
    }
  })

  return (
    <div className="flex gap-4">
      <button
        className={`flex items-center gap-2 ${
          !dislikes?.includes(user.uid) ? '' : 'text-red-500'
        } hover:cursor-pointer`}
        onClick={handleDislike}
      >
        <span className="text-[10px]">{dislikeCount && dislikeCount}</span>
        <BiDislike />
      </button>
      <button
        className={`flex items-center gap-2 ${
          !likes?.includes(user.uid) ? '' : 'text-green-500'
        } hover:cursor-pointer`}
        onClick={handleLike}
      >
        <BiLike />
        <span className="text-[10px]">{likeCount && likeCount}</span>
      </button>
    </div>
  )
}

export default LikeButtons
