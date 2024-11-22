import Navbar from "./Navbar";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ImgResponse from "../../../public/ea78bad35f833f454809efb0be5d6eff11a2e7c8.jpeg";

function Header() {
  return (
    <>
      {/* Navbar всегда на всю ширину экрана */}
      <Navbar />

      {/* Контент Header */}
      <div className="min-h-[420px] px-32 mx-auto max-w-screen-xl">
        <section className="flex justify-between items-start w-full">
          {/* Левое изображение */}
          <div className="flex justify-start items-start w-auto">
            <Image
              src={logo}
              alt="Logo"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Правое изображение */}
          <div className="flex justify-end items-start w-full">
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
    </>
  );
}

export default Header;
