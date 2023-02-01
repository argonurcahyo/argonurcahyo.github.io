import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* Higher Order Component */}
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
