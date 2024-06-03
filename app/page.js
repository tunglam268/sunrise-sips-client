import dynamic from "next/dynamic";

const Header = dynamic(() => import('../components/Header'), {})
const Hero = dynamic(() => import('../components/Hero'),{})
const Menu = dynamic(() => import('../components/Menu'), {ssr: false})
const Reservation = dynamic(() => import('../components/Reservation'), {ssr: false})
const About = dynamic(() => import('../components/About'), {ssr: false})
const Map = dynamic(() => import('../components/Map'), {ssr: false})
const Footer = dynamic(() => import('../components/Footer'), {ssr: false})

export default function Home() {
    return (
        <main className={'w-full max-w-[1440px] bg-white mx-auto overflow-hidden'}>
            <Header/>
            <Hero/>
            <Menu/>
            <Reservation/>
            <About/>
            <Map/>
            <Footer/>
        </main>
    );
}
