import { ThemeProvider } from 'next-themes'
import '../styles/index.css'
// import { SessionProvider } from "next-auth/react"
import Layout from '../components/Layout'
import { StateContext } from '../Context/StateContext'

function MyApp({ Component, pageProps: { ...pageProps } }) {

  return (
    <>
    <ThemeProvider attribute="class">
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    </ThemeProvider>
    </>
  )
}

export default MyApp