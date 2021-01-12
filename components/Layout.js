import React from "react";
import {Header} from "./index";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Layout = (props) => {
    const {children} = props;
    return (
        <div className={styles.container}>
            <Head>
                <title>Movies</title>
            </Head>
            <Header/>
            {children}
        </div>

    )
}

export default Layout