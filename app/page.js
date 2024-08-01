import dynamic from "next/dynamic";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Header = dynamic(() => import("../components/Header"), {});
const Hero = dynamic(() => import("../components/Hero"), {});
const Menu = dynamic(() => import("../components/Menu"), { ssr: false });
const Reservation = dynamic(() => import("../components/Reservation"), { ssr: false });
const About = dynamic(() => import("../components/About"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className={"w-full max-w-[1440px] bg-white mx-auto overflow-hidden relative"}>
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Footer />
      <div className="fixed z-10 top-[50%] left-[5%] gap-4 flex flex-col">
        <FaFacebookSquare size={32} />
        <FaSquareInstagram size={32} />
      </div>
    </main>
  );
}
