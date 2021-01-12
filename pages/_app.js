import '../styles/globals.css'
import {Layout} from "../components";

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
