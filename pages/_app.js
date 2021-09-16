import '@style/globals.css'

import Head from 'next/head'
import Header from '@comp/header'
import Footer from '@comp/footer'
import { Auth0Provider } from '@auth0/auth0-react'

export default function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      redirectUri={process.env.API_URL}
    >
      <Head>
        <title>Çalgan Aygün</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="py-14">
        <Component {...pageProps} />
      </main>
      <Footer />
    </Auth0Provider>
  )
}
