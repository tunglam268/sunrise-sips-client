"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import {useEffect, useState} from "react";
import {FaArrowLeft} from "react-icons/fa6";

const Footer = dynamic(() => import("../../components/Footer"));
const Food = dynamic(() => import("../../components/Food"));
const Drink = dynamic(() => import("../../components/Drink"));

const CATEGORIES = {
    FOODS: "FOODS",
    DRINKS: "DRINKS",
};

const menuList = [
    {
        href: "FOODS",
        title: "Foods",
        className: "inline-block p-3",
    },
    {
        href: "DRINKS",
        title: "Drinks",
        className: "inline-block p-3",
    },
];

function Menu() {
    const [hrefSelected, setHrefSelected] = useState(CATEGORIES.FOODS);

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        setHrefSelected(hash);
    }, []);

    return (
        <main className={"bg-menu2 w-full bg-cover bg-white mx-auto"}>
            <div
                class="text-sm font-medium text-center bg-brown-heavy fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200">
                <div className="max-w-[1440px] m-auto relative">
                    <div className="absolute left-6 top-[35%]">
                        <Link href="/">
                            <FaArrowLeft color="white"/>
                        </Link>
                    </div>
                    <ul class="flex gap-3 flex-wrap m-auto justify-center pb-1">
                        {menuList?.map((menu, index) => (
                            <li key={index} onClick={() => setHrefSelected(menu.href)}>
                                <a href={`#${menu.href}`}
                                   className={`${menu.className} ${hrefSelected === menu.href && "border-b-2"}`}>
                                    {menu.title}
                                </a>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="gap-10 w-[100%] max-w-[1440px] m-auto py-8 mt-10">
                {hrefSelected === CATEGORIES.FOODS && (
                    <Food/>
                )}
                {hrefSelected === CATEGORIES.DRINKS && (
                    <Drink/>
                )}
            </div>
            <Footer/>
        </main>
    );
}

export default Menu;
