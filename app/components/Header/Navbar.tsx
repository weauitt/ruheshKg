'use client';
import Link from "next/link";
import { useRouter } from "next/navigation"; // Импорт useRouter
import { FaYoutube, FaTelegram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import donate from "../../../public/donate.png";
import kyrgyzstan from "../../../public/kyrgyzstan.png";
import russia from "../../../public/russia.png";
import unitedKingdom from "../../../public/united-kingdom.png";
import turkey from "../../../public/turkey.png";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const router = useRouter(); // Использование маршрутизатора

  // Функция для изменения языка
  const changeLocale = (locale: string) => {
    router.push(`/${locale}`);
  };

  return (
    <nav className="bg-[#24252f] w-full">
      <div className="max-w-screen-xl mx-auto px-32 py-1 flex items-center justify-between">
        {/* Левая часть с иконками */}
        <div className="flex items-center gap-4">
          <FaFacebookF className="text-white cursor-pointer hover:text-gray-500 transition-colors duration-300" />
          <FaYoutube className="text-white cursor-pointer hover:text-gray-500 transition-colors duration-300" />
          <FaTelegram className="text-white cursor-pointer hover:text-gray-500 transition-colors duration-300" />
          <FaWhatsapp className="text-white cursor-pointer hover:text-gray-500 transition-colors duration-300" />
          <div className="border-l h-6 border-gray-400 mx-4" />
          <Link href="/register" className="text-white text-[14px]">
            {t("authentication")}
          </Link>
          <Link href="/login" className="text-[14px]">
            {t("registr")}
          </Link>
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src={donate} alt="/" />
            <span className="text-white cursor-pointer text-[14px]">
              {t("donate")}
            </span>
          </div>
          <div className="border-l h-6 border-gray-400 mx-4" />
          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => changeLocale("ky")} // Переход на KY
            >
              <Image src={kyrgyzstan} alt="/" />
              <span className="text-white text-[12px]">KY</span>
            </div>
            <div className="border-l h-6 border-gray-400" />
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => changeLocale("ru")} // Переход на RU
            >
              <Image src={russia} alt="/" />
              <span className="text-white text-[12px]">RU</span>
            </div>
            <div className="border-l h-6 border-gray-400" />
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => changeLocale("en")} // Переход на EN
            >
              <Image src={unitedKingdom} alt="/" />
              <span className="text-white text-[12px]">EN</span>
            </div>
            <div className="border-l h-6 border-gray-400" />
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => changeLocale("tr")} // Переход на TR
            >
              <Image src={turkey} alt="/" />
              <span className="text-white text-[12px]">TR</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
