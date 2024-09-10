'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Link as ScrollLink} from 'react-scroll'
import Nav from './Nav'
import NavMobile from './NavMobile'
import {Button} from './ui/button'

const Header = () => {
    const [active, setActive] = useState(false)
    useEffect(() => {
        //detect scroll
        const handleScroll = () => {
            setActive(window.scrollY > 100);
        }
        //add event listener
        window.addEventListener('scroll', handleScroll)

        //clear event listener
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);


    return <header
        className={`${active ? 'bg-brown-heavy py-4' : 'bg-none py-8'} fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}>
        <div className={"container mx-auto"}>
            {/*logo nav btn*/}
            <div className={`flex items-center justify-between`}>
                {/*logo*/}
                <Link href={'/'}>
                    <Image src={`${active ? '/logo-negative.svg' : '/logo-positive.svg'}`} width={active ? 100 : 200}
                           height={50}
                           alt={'/'}/>
                </Link>
                {/*nav*/}
                <Nav containerStyles={`hidden xl:flex gap-x-12`}
                     linkStyles={`capitalize ${active ? 'text-white' : 'text-brown-heavy'}`}/>
                {/*btn*/}
                <ScrollLink to={'reservation'} smooth={true}>
                    <Button className={"hidden xl:block text-[16px]"} variant={''} size={'sm'}>Book a table</Button>
                </ScrollLink>
                {/*mobile nav*/}
                <NavMobile containerStyles={'xl:hidden'} iconStyles={'text-3xl'} linkStyles={`uppercase`} isActive={active}/>
            </div>
        </div>
    </header>
}

export default Header;