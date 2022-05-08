import LogoutButton from '../components/LogoutButton'
import { AuthFunctions } from '../src/AuthContext'
import Link from 'next/link'
const index = () => {
  const { user } = AuthFunctions()
  console.log(user)
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <h1 className="p-10 text-center text-7xl font-medium text-white">
        {' '}
        APEX LEGENDS MATCHMAKER!
      </h1>
      <Link href="/SignUp">
        <button className="mx-auto w-2/12 bg-red-600 p-4 text-white hover:bg-red-800">
          {' '}
          Enter{' '}
        </button>
      </Link>
    </div>
  )
}

export default index
