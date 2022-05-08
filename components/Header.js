import React from 'react'
import Link from 'next/link'
import { AuthFunctions } from '../src/AuthContext'
import LogoutButton from './LogoutButton'
import { HiCog } from 'react-icons/hi'
import Image from 'next/image'

const Header = () => {
  const { user } = AuthFunctions()
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

  /*====================Design Object=========================*/
  const design = {
    headerStyle:
      'bg-gradient-to-b from-black via-black to-red-900 flex justify-between p-2',
    headerLeftStyle: 'flex items-center hover:cursor-pointer',
    headerLeftSpanStyle: 'text-xs text-white border-b',
    headerRightNavStyle: 'items-center flex text-white',
    headerRightNavLinkStyle: 'text-xs text-white flex gap-4 items-center',
  }
  return (
    <div className={design.headerStyle}>
      <Link href="/">
        <div className={design.headerLeftStyle}>
          <svg
            width="40"
            height="40"
            viewBox="100 100 1400 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m800.151515 100 515.151515 878.787879L1163.787879 1100 874.767918 903.070992h167.68392L800.151515 478.787879l-241.52721 424.283113h165.875059L436.515152 1100 285 978.787879z"
              fill="#ffffff"
              fillRule="nonzero"
            />
          </svg>
          <span className={design.headerLeftSpanStyle}>
            Apex Legends Matchmaker
          </span>
        </div>
      </Link>
      <nav></nav>
      <nav className={design.headerRightNavStyle}>
        <ul className={design.headerRightNavLinkStyle}>
          <li>{profileButton}</li>

          <li>{loginButton}</li>
          <li>{settingsButton}</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header

export const getStaticProps = async () => {
  const snapshot = await getDoc(collection(db, 'users'))
  const user = snapshot.docs.find((doc) => doc.id)
  const userData = { ...user.data(), id: user.id }
  return { props: { userData } }
}
