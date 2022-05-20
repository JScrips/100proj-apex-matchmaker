import React from 'react'
import Link from 'next/link'
import { AuthFunctions } from '../src/AuthContext'
import LogoutButton from './LogoutButton'
import { HiCog } from 'react-icons/hi'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

const Header = () => {
  const { user } = AuthFunctions()
  const [isOpen, setIsOpen] = useState(true)
  /* =================Conditional Renders===================== */
  const welcome = user ? ` ${user.displayName}` : ` Guest`

  const profileButton = user ? (
    <Link href={`/Profile/${user.displayName}`}>{welcome}</Link>
  ) : (
    <Link href={`/SignUp`}>Sign Up</Link>
  )
  const loginButton = user ? (
    <LogoutButton />
  ) : (
    <Link href="/SignIn">Sign In</Link>
  )
  const settingsButton = user ? (
    <Link href={`/Settings/${user.displayName}`}>
      <a>
        <HiCog className="text-lg hover:cursor-pointer" />
      </a>
    </Link>
  ) : (
    ''
  )

  const userList = user ? (
    <Link href="/Userlist">
      <a className="">User List</a>
    </Link>
  ) : (
    <Link href="/SignIn">
      <a>User List</a>
    </Link>
  )

  const searchUsers = user ? (
    <Link href="/Search">
      <a className="">Search Users</a>
    </Link>
  ) : (
    ''
  )

  const activeTeams = user ? (
    <Link href="/ActiveTeams">
      <a className="">Active Teams</a>
    </Link>
  ) : (
    ''
  )

  const toShow = isOpen ? 'hidden' : 'block'

  const handleTranslate = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(true)
  }

  /*====================Design Object=========================*/
  const design = {
    headerStyle:
      'bg-gradient-to-b from-black via-black to-red-900 flex justify-between p-2 relative z-10 items-center',
    headerLeftStyle:
      'flex items-center hover:cursor-pointer hidden md:inline-block',
    mobileHeaderLeftStyle:
      'flex items-center hover:cursor-pointer block md:hidden',
    headerLeftSpanStyle: 'text-xs text-white',
    headerRightNavStyle: 'items-center flex text-white hidden md:block',
    mobileHeaderRightNavStyle: 'items-center flex text-white block md:hidden',
    headerRightNavLinkStyle: 'text-base text-white flex gap-4 items-center',
    individualLinkStyle: 'text-xs text-white border-b',
  }
  return (
    <div className="">
      <div className={design.headerStyle}>
        {/*====================Header Left=========================*/}
        <Link href="/">
          <div className={design.headerLeftStyle}>
            <svg
              width="75"
              height="75"
              viewBox="100 100 1400 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m800.151515 100 515.151515 878.787879L1163.787879 1100 874.767918 903.070992h167.68392L800.151515 478.787879l-241.52721 424.283113h165.875059L436.515152 1100 285 978.787879z"
                fill="#ffffff"
                fillRule="nonzero"
              />
            </svg>
          </div>
        </Link>
        {/*====================Mobile Header Left ==========================*/}
        <Link href="/">
          <div className={design.mobileHeaderLeftStyle}>
            <svg
              width="60"
              height="60"
              viewBox="100 100 1400 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m800.151515 100 515.151515 878.787879L1163.787879 1100 874.767918 903.070992h167.68392L800.151515 478.787879l-241.52721 424.283113h165.875059L436.515152 1100 285 978.787879z"
                fill="#ffffff"
                fillRule="nonzero"
              />
            </svg>
          </div>
        </Link>

        {/*====================Header Right=========================*/}
        <nav></nav>
        <nav className={design.headerRightNavStyle}>
          <ul className={design.headerRightNavLinkStyle}>
            <li>{activeTeams}</li>
            <li>{searchUsers}</li>
            <li>{userList}</li>
            <li>{profileButton}</li>
            <li>{loginButton}</li>
            <li>{settingsButton}</li>
          </ul>
        </nav>

        {/*====================Mobile Header Right=========================*/}
        <nav className="md:hidden"></nav>
        <nav className={design.mobileHeaderRightNavStyle}>
          <GiHamburgerMenu className="text-2xl" onClick={handleTranslate} />
        </nav>
      </div>
      <div className={` ${toShow}  md:hidden`}>
        <div className="">
          <ul
            className={`relative ml-auto  flex flex-col items-center gap-4 bg-red-900 p-2 text-sm text-white transition duration-500 md:hidden   `}
          >
            <li
              className="w-full border-b border-red-800 pb-2 text-center"
              onClick={() => closeMenu()}
            >
              {userList}
            </li>
            <li
              className="w-full border-b border-red-800 pb-2 text-center"
              onClick={() => closeMenu()}
            >
              {searchUsers}
            </li>
            <li
              className="w-full border-b border-red-800 pb-2 text-center"
              onClick={() => closeMenu()}
            >
              {activeTeams}
            </li>
            <li
              className="w-full border-b border-red-800 pb-2 text-center"
              onClick={() => closeMenu()}
            >
              {profileButton}
            </li>
            <li
              className="w-full border-b border-red-800 pb-2 text-center"
              onClick={() => closeMenu()}
            >
              {loginButton}
            </li>
            <li onClick={() => closeMenu()}>{settingsButton}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

export const getServerSideProps = async () => {
  const snapshot = await getDoc(collection(db, 'users'))
  const user = snapshot.docs.find((doc) => doc.id)
  const userData = { ...user.data(), id: user.id }
  return { props: { userData } }
}
