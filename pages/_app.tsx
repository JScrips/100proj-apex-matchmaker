import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultLayout from '../components/DefaultLayout'
import { AuthContextProvider } from '../src/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </AuthContextProvider>
  )
}

export default MyApp
