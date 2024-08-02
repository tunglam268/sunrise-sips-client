import React from "react";
import { Link } from 'react-scroll';

const links = [
    {
        path: "home",
        name: "Home",
        offset: -50
    },
    {
        path: "menu",
        name: "Menu",
        offset: -50
    },
    {
        path: "about",
        name: "About",
        offset: -150
    },
    {
        path: "contact",
        name: "Contact",
        offset: 0
    },
    {
        path: "https://bopple.app/",
        name: "Online Order",
        offset: 0,
        external: true
    },
]

const Nav = ({ containerStyles, linkStyles }) => {
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                if (link.external) {
                    return (
                        <a
                            key={index}
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${linkStyles}`}
                        >
                            <h3>{link.name}</h3>
                        </a>
                    );
                } else {
                    return (
                        <Link
                            key={index}
                            to={link.path}
                            spy={true}
                            smooth={true}
                            offset={link.offset}
                            duration={500}
                            className={`${linkStyles}`}
                        >
                            <h3>{link.name}</h3>
                        </Link>
                    );
                }
            })}
        </nav>
    );
}

export default Nav;
