'use client'
import {motion} from 'framer-motion'
import {fadeIn} from "@/variants";
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook , FaInstagram , FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={`bg-brown-heavy  -footer bg-cover bg-no-repeat text-white pt-16`}>
            <div className={`container mx-auto`}>
                <div className={`flex flex-col justify-between xl:flex-row`}>
                    <div className={`w-[300px] mb-8 xl:mb-0`}>
                        <Link href={`/`}>
                            <Image src={'/logo-negative.svg'} width={180} height={72} alt={``}/>
                        </Link>
                    </div>
                    {/*grid items*/}
                    {/*<div>*/}
                    {/*    <h4 className={`font-semibold mb-5`}>Social</h4>*/}
                    {/*</div>*/}
                    <div className={`flex-3 grid grid-cols-1 xl:grid-cols-3 gap-[0px] mb-8 xl:mb-16`}>
                        <div>
                        <h4 className={`font-semibold mb-5`}>Social</h4>
                            <ul className={`flex flex-col gap-y-5 text`}>
                                <li>
                                    <Link href={`/`}>Youtube <FaYoutube/></Link>
                                </li>
                                <li>
                                    <Link className={`max-w-[270px]`} href={`/`}>Facebook <FaFacebook/></Link>
                                </li>
                                <li>
                                    <Link href={`/`}>Instagram <FaInstagram/></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
