import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HomeContextProvider } from '../src/contexts/HomeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HomeContextProvider>
      <Component {...pageProps} />
    </HomeContextProvider>
  )
}

export default MyApp
