import dynamic from "next/dynamic";
import {FaFacebookF} from "react-icons/fa6";
import '../components/style.css';

const Header = dynamic(() => import("../components/Header"), {});
const Hero = dynamic(() => import("../components/Hero"), {});
const Menu = dynamic(() => import("../components/Menu"), {ssr: false});
const Reservation = dynamic(() => import("../components/Reservation"), {ssr: false});
const About = dynamic(() => import("../components/About"), {ssr: false});
const Footer = dynamic(() => import("../components/Footer"), {ssr: false});

export default function Home() {
  return (
    <main className={"bg-hero w-full max-w-[1440px] bg-white mx-auto overflow-hidden relative"}>
      <Header/>
      <Hero/>
      <Menu/>
      <Reservation/>
      <About/>
      <Footer/>
      <div className="fixed z-10 top-[50%] left-[5%] gap-4 flex-col hidden md:flex social-icons">
        <FaFacebookF>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white"/>
        </FaFacebookF>
        <div className="outer">
          <div className="inner">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white"/>
          </div>
        </div>
      </div>
    </main>
  );
}
