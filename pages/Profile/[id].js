import React from 'react'
import {
  collection,
  getDocs,
  doc,
  setDoc,
  serverTimestamp,
  query,
  where,
  onSnapshot,
  addDoc,
  orderBy,
  deleteDoc,
  getDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore'
import { db } from '../../firebase-config'
import Image from 'next/image'
import { FaPlaystation, FaXbox } from 'react-icons/fa'
import { SiNintendoswitch } from 'react-icons/si'
import { HiDesktopComputer, HiOutlineStatusOnline } from 'react-icons/hi'
import { AuthFunctions } from '../../src/AuthContext'
import { useState, useEffect } from 'react'
import LikeButtons from '../../components/LikeButtons'
import ProtectedRoute from '../../components/ProtectedRoute'
import OnlineStatus from '../../components/OnlineStatus'
import CurrentlyPlaying from '../../components/CurrentlyPlaying'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

const Profile = ({ userData }) => {
  const { user } = AuthFunctions()
  const [comment, setComment] = useState('')
  const [commentList, setCommentList] = useState([])
  const [filterBy, setFilterBy] = useState('date')
  const [commentRating, setCommentRating] = useState()
  const router = useRouter()

  const q = query(collection(db, `users/${userData.displayName}/profComments`))

  /* ==========================Functions================================ */
  const handleComment = async (e, comment, commentRating) => {
    const commentRef = collection(
      db,
      `users/${userData.displayName}/profComments`
    )
    const userRef = collection(db, 'users')
    const specificUser = doc(userRef, userData.displayName)
    const specificUserInfo = await getDoc(specificUser)

    e.preventDefault()
    const raters = specificUserInfo.data().raters
    if (raters.includes(user.displayName)) {
      commentRating = ''
      alert('You have already rated this user!')

      try {
        await updateDoc(specificUser, {
          rating: arrayUnion(Number(commentRating)),
          raters: arrayUnion(user.displayName),
        })
        await addDoc(commentRef, {
          comment: comment,
          likes: [user.uid],
          dislikes: [],
          date: Date()
            .toLocaleString('en-US', { timeZone: 'America/Texas' })
            .slice(0, 24),
          by: user.displayName,
          profilePic: user.photoURL,
          rating: commentRating,
        })
        setComment('')
      } catch (err) {
        console.log(err.message)
      }
    } else {
      try {
        await updateDoc(specificUser, {
          rating: arrayUnion(Number(commentRating)),
          raters: arrayUnion(user.displayName),
        })
        await addDoc(commentRef, {
          comment: comment,
          likes: [user.uid],
          dislikes: [],
          date: Date()
            .toLocaleString('en-US', { timeZone: 'America/Texas' })
            .slice(0, 24),
          by: user.displayName,
          profilePic: user.photoURL,
          rating: commentRating,
        })
        setComment('')
      } catch (err) {
        console.log(err.message)
      }
    }
  }

  const handleDelete = async (id) => {
    try {
      const commentRef = collection(
        db,
        `users/${userData.displayName}/profComments`
      )
      await deleteDoc(doc(commentRef, id))
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleNavigate = (user) => {
    router.push(`/Profile/${user}`)
  }

  useEffect(() => {
    const getLiveComments = async () => {
      const q = query(
        collection(db, `users/${userData.displayName}/profComments`),
        orderBy(filterBy, 'desc')
      )
      const unsub = onSnapshot(q, (querySnap) => {
        const comments = []
        querySnap.forEach((doc) => {
          comments.push({ ...doc.data(), id: doc.id })
        })
        setCommentList(comments)
      })
    }
    getLiveComments()
  }, [filterBy])

  const showRating = (info) => {
    let rating = info.reduce((a, b) => a + b, 0) / info.length

    if (rating === 1) {
      return <BsStarFill className="text-red-800" size="1.3em" />
    } else if (rating > 1 && rating < 2) {
      return (
        <div className="flex">
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarHalf className="text-red-800" size="1.3em" />
        </div>
      )
    } else if (rating === 2) {
      return (
        <div className="flex">
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
        </div>
      )
    } else if (rating > 2 && rating < 3) {
      return (
        <div className="flex">
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarHalf className="text-red-800" size="1.3em" />
        </div>
      )
    } else if (rating === 3) {
      return (
        <div className="flex">
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
        </div>
      )
    } else if (rating > 3 && rating < 4) {
      return (
        <div className="flex">
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarHalf className="text-red-800" size="1.3em" />
        </div>
      )
    } else if (rating === 4) {
      return (
        <div className="flex">
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
        </div>
      )
    } else if (rating > 4 && rating < 5) {
      return (
        <div className="flex gap-2">
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarHalf className="text-red-800" size="1.3em" />
        </div>
      )
    } else if (rating === 5) {
      return (
        <div className="flex gap-2">
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
          <BsStarFill className="text-red-800" size="1.3em" />
        </div>
      )
    }
  }

  const showRateOption = async () => {
    const userRef = collection(db, 'users')
    const specificUser = doc(userRef, userData.displayName)
    const specificUserInfo = await getDoc(specificUser)

    const raters = specificUserInfo.data().raters
    if (raters.includes(user.displayName)) {
      return 'hidden'
    } else {
      return 'block'
    }
  }

  /* ==========================Conditional Rendering================================ */
  const profilePic = userData.profilePic ? userData.ProfilePic : '/apexLogo.png'
  const photoURL =
    user && userData.photoURL ? userData.photoURL : '/apexLogo.png'

  const showRatingFull = userData.rating ? showRating(userData.rating) : ''
  const ratingNumber =
    userData.rating
      .filter((num) => typeof num === 'number')
      .reduce((a, b) => a + b, 0) /
    userData.rating.filter((num) => typeof num === 'number').length
  const ratingNumberFloat = Math.round(ratingNumber * 10) / 10

  const ownProfile =
    userData.displayName === user.displayName ? 'hidden' : 'block'

  const showRateOptions = userData.raters.includes(user.displayName)
    ? 'hidden'
    : 'block'

  const alreadyRated = userData.raters.includes(user.displayName)
    ? 'You have already rated this player'
    : ''

  return (
    <ProtectedRoute>
      {/* ==========================Mobile Profile================================ */}
      <div className="block bg-neutral-700 p-4 md:hidden">
        <div className="flex min-h-screen flex-col items-center ">
          <article className="flex  flex-col items-center rounded-xl p-2 text-center">
            <div className=" sticky top-0 ">
              <div className="">
                <Image
                  src={photoURL}
                  width={150}
                  height={150}
                  className="rounded-full"
                  objectFit="cover"
                />
              </div>
              <section className=" border-6 border-black">
                <span className=" text-6xl font-medium text-white">
                  {userData.displayName}
                </span>
                <br />
                <span className=" flex justify-center text-lg text-white">
                  "{userData.tagline}"
                </span>
                <OnlineStatus userData={userData} />
                <div className=" mt-2 flex items-center justify-center gap-2 text-lg text-white">
                  <FaPlaystation />
                  <SiNintendoswitch />
                  <FaXbox />
                  <HiDesktopComputer />
                </div>
              </section>
              <CurrentlyPlaying userData={userData} />
            </div>
          </article>

          <article id="Middle" className=" flex flex-col gap-4">
            <section className=" rounded-xl bg-zinc-800 p-10 shadow-lg shadow-neutral-900">
              <div className="mb-10 text-center">
                <span className=" pt-2 pb-2 text-5xl text-white">
                  {userData.currentRank} {userData.currentTier}
                </span>
              </div>
              <div>
                <h1 className="border-b border-zinc-600 pb-1  text-lg font-medium text-white">
                  Favorite Weapons
                </h1>
                <ul className="mx-auto flex flex-wrap gap-4 pt-2 pb-2 text-[12px] text-white">
                  {userData.favoriteGuns.map((gun) => (
                    <li key={gun}>{gun}</li>
                  ))}
                </ul>
                <div>
                  <h1 className="border-b border-zinc-600 p-1 text-lg font-medium text-white">
                    Favorite Champs
                  </h1>
                  <ul className="mx-auto flex w-10/12 flex-wrap gap-4 pt-2 pb-2 text-[12px] text-white">
                    {userData.favoriteChamps.map((champ) => {
                      return <li key={champ}>{champ}</li>
                    })}
                  </ul>
                </div>
              </div>
            </section>

            <section className="  rounded-xl bg-zinc-800 shadow-lg shadow-neutral-900"></section>
            <section className="  rounded-xl bg-zinc-800 shadow-lg shadow-neutral-900"></section>
          </article>

          <article
            id="RightSide"
            className="flex max-h-screen min-w-full flex-col  rounded-xl"
          >
            <div className=" flex flex-col items-center justify-center p-4 text-4xl">
              {' '}
              {showRatingFull}{' '}
            </div>
            <span className="mb-4 text-center text-3xl font-medium text-red-800">
              {' '}
              {ratingNumber} Star Challenger{' '}
            </span>
            <div className=" overflow-auto rounded-xl bg-neutral-700 p-2 shadow-lg shadow-neutral-900">
              <h1 className="text-center text-2xl font-medium text-white">
                Reviews
              </h1>
              <div className="flex justify-center gap-4 text-xs">
                <select
                  name="filterComments"
                  className="w-14 bg-zinc-900 text-[12px] text-white"
                  onChange={(e) => setFilterBy(e.target.value)}
                >
                  <option value={`likes`}>Likes</option>
                  <option value={`dislikes`}>Dislikes</option>
                  <option value={`date`}>Newest</option>
                </select>
              </div>
              <div className="flex flex-col gap-2  p-2">
                {commentList.map((comment) => {
                  const deleteButton =
                    comment.by === user.displayName ? 'block' : 'hidden'
                  return (
                    <div
                      key={comment.id}
                      className="flex flex-col rounded-lg border-b border-zinc-600 p-6 text-white"
                    >
                      <div
                        className={`text-right text-[10px] ${deleteButton} hover:cursor-pointer`}
                        onClick={() => handleDelete(comment.id)}
                      >
                        Delete
                      </div>
                      <span className="mb-8 text-[20px]">
                        {comment.comment}
                      </span>
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex gap-1">
                            <Image
                              src={comment.profilePic}
                              width={30}
                              height={30}
                              className="rounded-full"
                              objectFit="cover"
                            />

                            <div className="flex flex-col">
                              <div className="flex items-center gap-6">
                                <span className="text-[12px]">
                                  By: {comment.by}
                                </span>
                              </div>
                              <div className="flex justify-around">
                                <span className="text-[8px]">
                                  {comment.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <LikeButtons
                            id={comment.id}
                            likes={comment.likes}
                            dislikes={comment.dislikes}
                            name={userData.displayName}
                          />
                        </div>
                        <div className="mt-4 flex justify-center text-[12px]">
                          {comment.rating
                            ? `Rated ${comment.rating} Stars`
                            : 'Did not rate'}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <form className={`flex flex-col rounded-xl  p-4  ${ownProfile}`}>
              <textarea
                className="rounded-xl p-4 text-sm"
                onChange={(e) => {
                  setComment(e.target.value)
                }}
                value={comment}
              >
                {' '}
              </textarea>
              <select
                className={`mx-auto mt-4 w-3/12 ${showRateOptions} `}
                onChange={(e) => setCommentRating(e.target.value)}
              >
                <option> Rating </option>
                <option value={5}> 5 </option>
                <option value={4}> 4 </option>
                <option value={3}> 3 </option>
                <option value={2}> 2 </option>
                <option value={1}> 1 </option>
              </select>
              <span className="text-center text-white">{alreadyRated}</span>

              <button
                onClick={(e) => handleComment(e, comment, commentRating)}
                className="mx-auto mt-4  rounded bg-red-900 p-2 font-bold text-white hover:bg-red-700"
              >
                Comment
              </button>
            </form>
          </article>
        </div>
      </div>

      {/* ==========================Desktop Profile================================ */}
      <div className="hidden min-h-screen bg-neutral-700 md:block">
        <div className="mx-auto flex  justify-between gap-4 bg-zinc-800 bg-opacity-0 p-6">
          <article
            id="LeftSide"
            className="flex  w-2/12 flex-col items-center rounded-xl p-2 text-center"
          >
            <div className="sticky top-0">
              <div className="">
                <Image
                  src={photoURL}
                  width={250}
                  height={250}
                  className="rounded-full"
                  objectFit="cover"
                />
              </div>
              <section className="">
                <span className=" text-2xl font-medium text-white">
                  {userData.displayName}
                </span>
                <br />
                <span className=" flex justify-center text-xs text-white">
                  "{userData.tagline}"
                </span>
                <OnlineStatus userData={userData} />
                <div className=" mt-2 flex items-center justify-center gap-2 text-xs text-white">
                  <FaPlaystation />
                  <SiNintendoswitch />
                  <FaXbox />
                  <HiDesktopComputer />
                </div>
                <CurrentlyPlaying userData={userData} />
              </section>
            </div>
          </article>
          <article id="Middle" className="flex  w-6/12 flex-col gap-4">
            <section className=" rounded-xl bg-zinc-800 p-2 shadow-lg shadow-neutral-900">
              <div className="mb-10 text-center">
                <span className=" pt-2 pb-2 text-7xl text-white">
                  {userData.currentRank} {userData.currentTier}
                </span>
              </div>
              <div>
                <h1 className="border-b border-zinc-600 pb-1  text-lg font-medium text-white">
                  Favorite Weapons
                </h1>
                <ul className="mx-auto flex w-10/12 flex-wrap gap-4 pt-2 pb-2 text-[12px] text-white">
                  {userData.favoriteGuns.map((gun) => (
                    <li key={gun}>{gun}</li>
                  ))}
                </ul>
                <div>
                  <h1 className="border-b border-zinc-600 p-1 text-lg font-medium text-white">
                    Favorite Champs
                  </h1>
                  <ul className="mx-auto flex w-10/12 flex-wrap gap-4 pt-2 pb-2 text-[12px] text-white">
                    {userData.favoriteChamps.map((champ) => {
                      return <li key={champ}>{champ}</li>
                    })}
                  </ul>
                </div>
              </div>
            </section>

            <section className="  rounded-xl bg-zinc-800 shadow-lg shadow-neutral-900"></section>
            <section className="  rounded-xl bg-zinc-800 shadow-lg shadow-neutral-900"></section>
          </article>
          <article id="RightSide" className="flex  w-4/12 flex-col  rounded-xl">
            <div className=" w-full overflow-auto rounded-xl bg-zinc-800 shadow-lg shadow-neutral-900">
              <div className="flex flex-col items-center justify-center">
                <div className="flex text-7xl">{showRatingFull}</div>
                <span className="text-center font-medium text-white">
                  {ratingNumberFloat} Stars
                </span>
              </div>
              <h1 className="text-center text-2xl font-medium text-white">
                Reviews
              </h1>
              <div className="flex justify-center gap-4 text-xs">
                <select
                  name="filterComments"
                  className="w-14 bg-zinc-900 text-[14px] text-white"
                  onChange={(e) => setFilterBy(e.target.value)}
                >
                  <option value={`likes`}>Likes</option>
                  <option value={`dislikes`}>Dislikes</option>
                  <option value={`date`}>Newest</option>
                </select>
              </div>
              <div className="flex flex-col gap-2  p-2">
                {commentList.map((comment) => {
                  const deleteButton =
                    comment.by === user.displayName ? 'block' : 'hidden'

                  return (
                    <div
                      key={comment.id}
                      className="flex flex-col rounded-lg border border-zinc-600 p-6 text-white"
                    >
                      <div
                        className={`text-right text-[10px] ${deleteButton} hover:cursor-pointer`}
                        onClick={() => handleDelete(comment.id)}
                      >
                        Delete
                      </div>
                      <span className="mb-8 border-b border-white border-opacity-10 pb-20 text-[14px]">
                        {comment.comment}
                      </span>
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between gap-2">
                          <Image
                            src={comment.profilePic}
                            height={70}
                            width={70}
                            className="rounded-full"
                            objectFit="cover"
                            onClick={() => {
                              handleNavigate(comment.by)
                            }}
                          />

                          <div className="flex flex-col">
                            <div className="flex items-center gap-6 ">
                              <span className="text-[2px]">
                                By: {comment.by}
                              </span>
                            </div>
                            <div className="flex gap-64">
                              <span className="text-[1px]">{comment.date}</span>

                              <LikeButtons
                                id={comment.id}
                                likes={comment.likes}
                                dislikes={comment.dislikes}
                                name={userData.displayName}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          {comment.rating
                            ? `Rated ${comment.rating} Stars`
                            : 'Did not rate'}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <form className={`flex flex-col rounded-xl  p-4 ${ownProfile}`}>
              <textarea
                className="rounded-xl p-8 text-sm"
                onChange={(e) => {
                  setComment(e.target.value)
                }}
                value={comment}
              >
                {' '}
              </textarea>
              <select
                className={`mx-auto mt-4 w-3/12 ${showRateOptions} `}
                onChange={(e) => setCommentRating(e.target.value)}
              >
                <option> Rating </option>
                <option value={5}> 5 </option>
                <option value={4}> 4 </option>
                <option value={3}> 3 </option>
                <option value={2}> 2 </option>
                <option value={1}> 1 </option>
              </select>
              <span className="text-center text-white">{alreadyRated}</span>

              <button
                onClick={(e) => handleComment(e, comment, commentRating)}
                className="mx-auto mt-4  rounded bg-red-900 p-2 font-bold text-white hover:bg-red-700"
              >
                Comment
              </button>
            </form>
          </article>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Profile

// this getStaticPaths function is used to get the paths for the pages in the next.js build.
// snapShot uses the getDocs

// export const getStaticPaths = async () => {
//   const snapShot = await getDocs(collection(db, 'users'))
//   const paths = snapShot.docs.map((doc) => {
//     return { params: { id: doc.id } }
//   })

//   return { paths, fallback: false }
// }

// export const getStaticProps = async ({ params }) => {
//   /* ===========user data =========== */
//   const snapshot = await getDocs(collection(db, 'users'))
//   const user = snapshot.docs.find((doc) => doc.id === params.id)
//   const userData = { ...user.data(), id: user.id }
//   /*===========profile comments =========== */

//   return { props: { userData } }
// }

export const getServerSideProps = async (ctx) => {
  try {
    const snapshot = await getDocs(collection(db, 'users'))
    const user = snapshot.docs.find((doc) => doc.id === ctx.query.id)
    const userData = { ...user.data(), id: user.id }
    return { props: { userData } }
  } catch (err) {
    console.log(err.message)
  }
}
