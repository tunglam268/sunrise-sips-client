'use client'
import React, {useState} from "react";
import {RiMenu2Line, RiHomeFill} from "react-icons/ri";
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai";
import {IoCloseOutline, IoHomeOutline, IoFastFoodOutline} from "react-icons/io5";
import {FaRegAddressBook} from "react-icons/fa6";
import {BsPeople} from "react-icons/bs";
import {HiOutlineShoppingCart} from "react-icons/hi";
import {Link as ScrollLink} from 'react-scroll'
import Images from 'next/image'
import Link from 'next/link'
import {Button} from './ui/button'

const links = [
    {
        icon: <IoHomeOutline/>,
        path: "home",
        name: "home",
        offset: 0
    },
    {
        icon: <IoFastFoodOutline/>,
        path: "menu",
        name: "menu",
        offset: 0
    },
    {
        icon: <BsPeople/>,
        path: "about",
        name: "about",
        offset: -50
    },
    {
        icon: <FaRegAddressBook/>,
        path: "contact",
        name: "contact",
        offset: 0
    },
    {
        icon: <HiOutlineShoppingCart/>,
        path: "https://bopple.app/",
        name: "order online",
        external: true,
        offset: 0
    }
]

const NavMobile = ({containerStyles, iconStyles, linkStyles, isActive}) => {
    const [isOpen, setIsOpen] = useState(false)
    const closeNav = () => {
        setIsOpen(false);
    };

    return <div className={`${containerStyles}`}>
        {/*nav trigger btn*/}
        <div onClick={() => setIsOpen(!isOpen)} className={`cursor-pointer outline-none`}>
            <AiOutlineMenuFold
                className={`text-3xl ${isActive ? 'text-white' : 'text-brown-heavy'} transition-all duration-200`}/>
        </div>
        <aside
            className={`${isOpen ? 'right-0' : '-right-full'} bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}>
            <div className={`flex flex-col items-center justify-between h-full`}>
                {/*nav close btn*/}
                <div
                    onClick={() => setIsOpen(false)}
                    className={`cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 bg-green flex items-center justify-center`}>
                    <IoCloseOutline/>
                </div>
                {/*logo*/}
                <Link href={'/'}>
                    <Images src={'/logo-negative.svg'} width={150} height={36} alt={''}/>
                </Link>
                {/*links*/}
                <div className={`flex flex-col gap-y-8`}>
                    {links.map((link, index) => {
                        if (link.external) {
                            return (
                                <a
                                    key={index}
                                    href={link.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={'flex items-center gap-x-3'}
                                >
                                    <div className={`${iconStyles}`}>{link.icon}</div>
                                    <div className={`${linkStyles}`}>{link.name}</div>
                                </a>
                            );
                        } else {
                            return (
                                <ScrollLink
                                    key={index}
                                    to={link.path}
                                    onClick={closeNav}
                                    offset={link.offset}
                                    className={'flex items-center gap-x-3'}
                                >
                                    <div className={`${iconStyles}`}>{link.icon}</div>
                                    <div className={`${linkStyles}`}>{link.name}</div>
                                </ScrollLink>
                            );
                        }
                    })}
                </div>
                {/*btn*/}
                <ScrollLink to='reservation' smooth offset={-150}>
                    <Button variant={'orange'} onClick={closeNav}>Book a table</Button>
                </ScrollLink>
            </div>
        </aside>
    </div>
}

export default NavMobile;