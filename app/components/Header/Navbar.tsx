"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Импорт useRouter
import { FaYoutube, FaTelegram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import donate from "../../../public/donate.png";
import kyrgyzstan from "../../../public/kyrgyzstan.png";
import russia from "../../../public/russia.png";
import unitedKingdom from "../../../public/united-kingdom.png";
import turkey from "../../../public/turkey.png";
import { useTranslations } from "next-intl";
import { useUser } from "@auth0/nextjs-auth0/client";
import { LoginButton } from "@/app/Authentication/LoginButton";
import { LogoutButton } from "@/app/Authentication/LogoutButton";

export default function Navbar() {
  const { user, error } = useUser();

  const t = useTranslations("Navbar");
  const router = useRouter();
  const [isMobile, setIsMobile] = React.useState(false);
  const [isMobily, setIsMobily] = React.useState(false);

  // Функция для изменения языка
  const changeLocale = (locale: string) => {
    router.push(`/${locale}`);
  };

  React.useEffect(() => {
    // Отслеживание ширины экрана
    const handleResize = () => setIsMobile(window.innerWidth <= 930);
    handleResize(); // Установить состояние при загрузке
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    // Отслеживание ширины экрана
    const handleResize = () => setIsMobily(window.innerWidth <= 775);
    handleResize(); // Установить состояние при загрузке
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (error) return <div>{error.message}</div>;

  return (
    <nav className="bg-[#24252f] w-full">
      <div className="containerNavbar py-1 flex items-center justify-between">
        {/* Левая часть с иконками */}
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/olzhobaishakir">
            <FaFacebookF className="text-white cursor-pointer hover:text-gray-500 transition-colors duration-300" />
          </a>
          <a href="https://www.youtube.com/channel/UC4PMF_BfOyuySZO53_ThhVw">
            <FaYoutube className="text-white cursor-pointer hover:text-gray-500 transition-colors duration-300" />
          </a>
          <a href="https://t.me/ruhesh">
            <FaTelegram className="text-white cursor-pointer hover:text-gray-500 transition-colors duration-300" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=996555100502&text=%D0%A1%D0%B0%D0%BB%D0%B0%D0%BC%D0%B0%D1%82%D1%81%D1%8B%D0%B7%D0%B1%D1%8B">
            <FaWhatsapp className="text-white cursor-pointer hover:text-gray-500 transition-colors duration-300" />
          </a>
          <div className="border-l h-6 border-gray-400 mx-4" />
          {!isMobily ? <>{!user ? <LoginButton /> : <LogoutButton />}</> : ""}
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-4">
          {!isMobile ? (
            <div className="flex items-center gap-2">
              <Image src={donate} alt="/" />
              <span className="text-white cursor-pointer text-[14px]">
                {t("donate")}
              </span>
              <div className="border-l h-6 border-gray-400 mx-4" />
            </div>
          ) : (
            ""
          )}

          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => changeLocale("ky")} // Переход на KY
            >
              {!isMobile ? <Image src={kyrgyzstan} alt="/" /> : ""}
              <span className="text-white text-[12px]">KY</span>
            </div>
            <div className="border-l h-6 border-gray-400" />
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => changeLocale("ru")} // Переход на RU
            >
              {!isMobile ? <Image src={russia} alt="/" /> : ""}
              <span className="text-white text-[12px]">RU</span>
            </div>
            <div className="border-l h-6 border-gray-400" />
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => changeLocale("en")} // Переход на EN
            >
              {!isMobile ? <Image src={unitedKingdom} alt="/" /> : ""}
              <span className="text-white text-[12px]">EN</span>
            </div>
            <div className="border-l h-6 border-gray-400" />
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => changeLocale("tr")} // Переход на TR
            >
              {!isMobile ? <Image src={turkey} alt="/" /> : ""}
              <span className="text-white text-[12px]">TR</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
