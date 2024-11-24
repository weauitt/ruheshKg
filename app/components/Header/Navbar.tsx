import Link from "next/link";
import { FaYoutube, FaTelegram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import donate from "../../../public/donate.png";
import kyrgyzstan from "../../../public/kyrgyzstan.png";
import russia from "../../../public/russia.png";
import unitedKingdom from "../../../public/united-kingdom.png";
import turkey from "../../../public/turkey.png";

export default function Navbar() {
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
            Катталуу баракчасы
          </Link>
          <Link href="/login" className="text-[14px]">
            Кирүү
          </Link>
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src={donate} alt="/" />
            <span className="text-white cursor-pointer text-[14px]">
              Колдоо көрсөтүү
            </span>
          </div>
          <div className="border-l h-6 border-gray-400 mx-4" />
          <div className="flex items-center gap-4">
            <Image src={kyrgyzstan} alt="/" />
            <span className="text-white cursor-pointer text-[12px]">KY</span>
            <div className="border-l h-6 border-gray-400" />
            <Image src={russia} alt="/" />
            <span className="text-white cursor-pointer text-[12px]">RU</span>
            <div className="border-l h-6 border-gray-400" />
            <Image src={unitedKingdom} alt="/" />
            <span className="text-white cursor-pointer text-[12px]">EN</span>
            <div className="border-l h-6 border-gray-400" />
            <Image src={turkey} alt="/" />
            <span className="text-white cursor-pointer text-[12px]">TR</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
