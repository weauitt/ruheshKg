"use client";
import React from "react";
import Navbar from "./Navbar";
import Navigation from "../Header/Navigation/Navigation";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ImgResponse from "../../../public/05e24a833267b1f2a40c9270e3593f9794a8086d.jpeg";
import "../../utils/responsive.css";

function Header() {
  const [isMobilee, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    // Отслеживание ширины экрана
    const handleResize = () => setIsMobile(window.innerWidth <= 775);
    handleResize(); // Установить состояние при загрузке
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <Navbar />
      {!isMobilee ? (
        <div className="hidden-xs">
          {" "}
          
          <div className="min-h-[420px] containerHeader min-h">
            <section className="flex justify-between items-start w-full  ">
              {/* Левое изображение */}
              <div className="flex justify-start items-start mt-4 logoWidth ">
                <Image
                  src={logo}
                  alt="Logo"
                  className=" h-auto object-contain  "
                />
              </div>
              {/* Правое изображение */}
              <div className="flex justify-end items-start w-full mt-4 banerWidth ">
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
         
        </div>
      ) : (
        ""
      )}
       <Navigation />
    </>
  );
}

export default Header;
