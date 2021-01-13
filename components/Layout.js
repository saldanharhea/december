import React from "react";
import {Header} from "./index";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Layout = (props) => {
    const {children} = props;
    return (
        <div className={styles.container}>
            <Head>
                <link rel="stylesheet" type="text/css" charSet="UTF-8"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>

                <title>Movies</title>
            </Head>
            <Header/>
            {children}
        </div>

    )
}

export default Layout