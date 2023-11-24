import ContextProvider from '@/context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ContextProvider>
      <Component {...pageProps} />
      <Toaster position='top-center' />
    </ContextProvider>
    
    </>
  )
}
