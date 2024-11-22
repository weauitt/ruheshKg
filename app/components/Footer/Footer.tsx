import { FaFacebookF, FaTelegramPlane, FaYoutube } from "react-icons/fa"; // Для иконок социальных сетей

function Footer() {
  return (
    <footer className="bg-[#24252f] text-white py-6">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between">
        {/* Левая часть - Контакты */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-bold">Байланыштар</h3>
          <p>+996 958 060 660</p>
          <p>+996 555 100 502</p>
          <p>rubchestalyk@gmail.com</p>
        </div>

        {/* Средняя часть - Социальные сети */}
        <div className="flex flex-col items-center space-y-3">
          <h3 className="font-bold">Соцтармактар</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaTelegramPlane size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Правая часть - Форма подписки */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-bold">Бизге катталыңыз</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Электрондук дарекчеңиз"
              className="p-2 rounded-l-lg w-64 text-black"
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
