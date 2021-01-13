import React from "react";
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <nav className="header">
                <Link href="/">
                    <a className="headerLink">Movie App</a>
                </Link>
                <Link href="/explore">
                    <a className="headerLink headerSubLink">Explore</a>
                </Link>
            </nav>
            <style jsx>{`
              .header {
                padding: 10px;
                overflow: hidden;
                position: absolute;
                top: 0;
                width: 100%;
                background-color: #343a40;
              }

              .headerLink {
                float: left;
                color: white;
                text-align: center;
                padding: 6px;
                cursor: pointer;
                text-decoration: none;
                font-size: 18px;
                line-height: 25px;
                border-radius: 4px;
              }

              .headerSubLink {
                color: hsla(0, 0%, 100%, .5) !important;

            `}</style>
        </>
    )
}

export default Header