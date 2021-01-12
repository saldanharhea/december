import React from "react";
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Header = () => {
    return (
        <nav className={styles.header}>
            <Link href="/">
                <a className={styles.headerLink}>Movie App</a>
            </Link>
        </nav>
    )
}

export default Header