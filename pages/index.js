import LogoutButton from '../components/LogoutButton'
import { AuthFunctions } from '../src/AuthContext'
import Link from 'next/link'
const index = () => {
  const { user } = AuthFunctions()
  const endpoint = user ? `/Profile/${user.displayName}` : '/SignUp'
  const welcome = user ? ` ${user.displayName}` : ` Guest`
  return (
    <div className="  flex min-h-screen min-w-full flex-col p-2">
      <span className="mb-4 text-center text-white">
        Welcome to Apex, {welcome}
      </span>
      <Link href={endpoint}>
        <button className="mx-auto w-4/12 bg-red-600 p-1 text-white hover:bg-red-800">
          {' '}
          Enter{' '}
        </button>
      </Link>
    </div>
  )
}

export default index
