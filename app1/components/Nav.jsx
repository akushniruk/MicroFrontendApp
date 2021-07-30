import * as React from 'react';
import Link from 'next/link';

const Nav = (props) => {
    return (
        <nav
            style={{
                background: "cadetblue",
                width: "100vw",
                height: "100px",
                color: "white",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px"
            }}
        >
            <a href="/">Navigation</a>
            <a href={props.href}>{props.name}</a>
        </nav>
    );
}

export default Nav;
