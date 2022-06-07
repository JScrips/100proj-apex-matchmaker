import LogoutButton from '../components/LogoutButton'
import { AuthFunctions } from '../src/AuthContext'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const index = () => {
  const { user } = AuthFunctions()
  const endpoint = user ? `/Profile/${user.displayName}` : '/SignUp'
  const welcome = user ? ` ${user.displayName}` : ` Guest`
  return (
    <div>
      <Head>
        <title>Apex MatchMaker</title>
        <link rel="icon" href="/ApexLogo.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Codeasaurus_Rex" />
        <meta name="twitter:image" content="https://picbun.com/p/2xinOYJe" />
        <meta property="og:url" content="https://apexmaker.vercel.app" />
        <meta property="og:title" content="Apex MatchMaker" />
        <meta
          property="og:description"
          content="Matchmake. Dominate. -- A hub for top contenders in Apex Legends to commune and create the ultimate Alpha Squad."
        />
        <meta property="og:image" content="https://picbun.com/p/2xinOYJe" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="hidden min-h-screen min-w-full flex-col justify-center md:flex">
        <div>
          <Image
            src="/kingscanyon.jpg"
            width={1920}
            height={1080}
            objectFit="cover"
            layout="responsive"
            className=""
          />
        </div>

        <div className="absolute inset-60 z-10 mx-auto mb-16 max-w-2xl flex-col items-center justify-center text-center">
          <h2 className="font-heading pb-4 text-4xl font-bold text-white lg:text-5xl">
            Matchmake. Dominate.
          </h2>

          <div>
            <Link href="/SignUp">
              <a className="mb-3 inline-block w-full rounded border border-red-600 bg-red-600 py-3 px-6 font-semibold text-white transition duration-200 hover:bg-red-700 lg:mb-0 lg:mr-3 lg:w-auto">
                Try for Free
              </a>
            </Link>
          </div>
          <div className="relative mx-auto mt-6 max-w-3xl">
            <video autoPlay muted>
              <source src="/herovideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/*==============================Mobile =================================*/}
      <div className=" flex min-w-full flex-col md:hidden">
        <div className="">
          <Image
            src="/mobileherobg.jpg"
            width={950}
            height={1689}
            objectFit="cover"
            layout=""
          />
        </div>
        <div className="inset-30 absolute z-10 mx-auto mb-16 flex max-w-2xl  flex-col items-center justify-center text-center">
          <span className="font-heading text-4xl font-bold text-white lg:text-5xl">
            Matchmake.
          </span>
          <span className="font-heading text-4xl font-bold text-white lg:text-5xl">
            Dominate.
          </span>

          <div>
            <Link href="/SignUp">
              <a className="mx-auto mb-3 inline-block  rounded border border-white bg-red-900 py-2 px-2 font-medium text-white transition duration-200 hover:bg-red-700">
                Try for Free
              </a>
            </Link>
          </div>
          <div className="relative mt-36 w-11/12">
            <video autoPlay muted playsInline className="rounded-lg">
              <source src="/herovideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
