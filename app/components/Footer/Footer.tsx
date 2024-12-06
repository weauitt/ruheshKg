"use client";
import { FaFacebookF, FaTelegramPlane, FaYoutube } from "react-icons/fa"; // Для иконок социальных сетей
import { FaMobileScreen } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-[#24252f] text-white py-6">
      <div className="containerFooter max-w-screen-xl mx-auto px-32 flex justify-between ">
        {/* Левая часть - Контакты */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-bold text-2xl">Байланыштар</h3>
          <div className="flex">
            <FaMobileScreen />
            <a className="text-sm ml-2" href="callto:+996558080860">
              +996 958 060 660
            </a>
          </div>

          <div className="flex">
            <FaWhatsapp/>
            <a
              className="text-sm ml-2"
              href="https://api.whatsapp.com/send?phone=996555100502&text=%D0%A1%D0%B0%D0%BB%D0%B0%D0%BC%D0%B0%D1%82%D1%81%D1%8B%D0%B7%D0%B1%D1%8B"
            >
              +996 555 100 502
            </a>
          </div>

          <div className="flex">
            <IoIosMail/>
          <a className="text-sm ml-2" href="mailto:ruheshsaity@gmail.com">
            rubchestalyk@gmail.com
          </a>
          </div>
        </div>

        {/* Средняя часть - Социальные сети */}
        <div className="flex flex-col items-center space-y-3 FooterFix ">
          <h3 className="font-bold text-2xl">Соцтармактар</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/olzhobaishakir" className="text-white hover:text-gray-400">
              <FaFacebookF size={35} />
            </a>
            <a href="https://t.me/ruhesh" className="text-white hover:text-gray-400 ">
              <FaTelegramPlane size={35} />
            </a>
            <a href="https://www.youtube.com/channel/UC4PMF_BfOyuySZO53_ThhVw" className="text-white hover:text-gray-400">
              <FaYoutube size={35} />
            </a>
          </div>
        </div>

        {/* Правая часть - Форма подписки */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-bold text-2xl FooterFix">Бизге катталыңыз</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Электрондук дарекчеңиз"
              className="p-2 rounded-l-lg w-64 text-black FooterInput"
            />
            <button className="bg-red-600 text-white py-2 px-4 rounded-r-lg">
              Катталуу
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
