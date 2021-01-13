import React from "react";
import '../styles/globals.css'
import {Layout} from "../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
