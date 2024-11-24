import Navbar from "./Navbar";
import Navigation from '../Header/Navigation/Navigation'
import Image from "next/image";
import '../../utils/Header.css'
import logo from "../../../public/logo.png";
import ImgResponse from "../../../public/05e24a833267b1f2a40c9270e3593f9794a8086d.jpeg";

function Header() {
  return (
    <>
      {/* Navbar всегда на всю ширину экрана */}
      <Navbar />

      {/* Контент Header */}
      <div className="min-h-[420px] px-32 mx-auto max-w-screen-xl">
        <section className="flex justify-between items-start w-full">
          {/* Левое изображение */}
          <div className="flex justify-start items-start mt-4">
            <Image
              src={logo}
              alt="Logo"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Правое изображение */}
          <div className="flex justify-end items-start w-full mt-4 ">
            <Image
              src={ImgResponse}
              width={683}
              height={394}
              alt="Response Image"
              className="object-contain"
            />
          </div>
        </section>
      </div>
      <Navigation />
    </>
  );
}

export default Header;
