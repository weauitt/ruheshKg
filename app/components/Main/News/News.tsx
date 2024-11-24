import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import NewOne from "../../../../public/News1.jpeg";
import NewTwo from "../../../../public/News2.jpeg";
import NewThree from "../../../../public/News3.jpeg";
import NewFour from "../../../../public/News4.jpeg";
import NewFive from "../../../../public/News5.jpeg";
import NewSix from "../../../../public/News6.jpeg";

const newsData = [
  {
    name: "Жолубек Канышбаев: Шаќырулган чаңгырмаларын даярдай сереп",
    description:
      "Эгер “РухЭш” сайтынын ишмердиги токтоп калбашын кааласаңыз, бизди колдоо үчүн төмөнкү банктык эсебибизге...",
    image: NewOne,
    date: "22.11.2024",
    views: 185,
  },
  {
    name: "Жорж Орвулл: Сенат жана англис тили",
    description:
      "Эгер “РухЭш” сайтынын ишмердиги токтоп калбашын кааласаңыз, бизди колдоо үчүн төмөнкү банктык эсебибизге...",
    image: NewTwo,
    date: "22.11.2024",
    views: 245,
  },
  {
    name: "Роулд Даль: Песни[1] жашы",
    description:
      "Эгер “РухЭш” сайтынын ишмердиги токтоп калбашын кааласаңыз, бизди колдоо үчүн төмөнкү банктык эсебибизге...",
    image: NewThree,
    date: "22.11.2024",
    views: 248,
  },
  {
    name: "Эзран Роттердамски: Келесоолукту даңкттоо",
    description:
      "Эгер “РухЭш” сайтынын ишмердиги токтоп калбашын кааласаңыз, бизди колдоо үчүн төмөнкү банктык эсебибизге...",
    image: NewFour,
    date: "22.11.2024",
    views: 158,
  },
  {
    name: "Петро Олежов",
    description:
      "Эгер “РухЭш” сайтынын ишмердиги токтоп калбашын кааласаңыз, бизди колдоо үчүн төмөнкү банктык эсебибизге...",
    image: NewFive,
    date: "22.11.2024",
    views: 145,
  },
  {
    name: "Анастасия Воронина",
    description:
      "Эгер “РухЭш” сайтынын ишмердиги токтоп калбашын кааласаңыз, бизди колдоо үчүн төмөнкү банктык эсебибизге...",
    image: NewSix,
    date: "22.11.2024",
    views: 150,
  },
];

const NewsList: React.FC = () => {
  return (
    <div className="bg-gray-200 py-8">
      <div className="px-6 max-w-screen-lg mx-auto bg-white">
        <h2 className="font-bold text-black text-[16px] px-2 py-4 border-b border-gray-300">
          Жаңылар
        </h2>

        {/* Новости */}
        <div className="divide-y divide-gray-300">
          {newsData.map((news, index) => (
            <div key={index} className="flex items-center px-4 py-6">
              {/* Картинка с затемнением */}
              <div className="relative group w-44 h-28 rounded-md overflow-hidden cursor-pointer">
                <Image
                  src={news.image}
                  alt={news.name}
                  className="w-full h-full object-cover cursor-pointer"
                />
                {/* Затемнение */}
                <div className="absolute inset-0 cursor-pointer bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 ease-in-out"></div>
              </div>

              {/* Текст */}
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800 hover:text-red-500 transition-colors cursor-pointer">
                  {news.name}
                </h3>

                <p className="text-xs text-gray-500 mt-2 flex items-center">
                  <FaCalendarAlt />
                  <span className="ml-1 mr-1">{news.date}</span>
                  <IoEyeSharp />
                  <span className="ml-1">{news.views}</span> просмотров
                </p>
                <p className="text-sm text-gray-600 mt-2">{news.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="flex items-center justify-center mt-4">
          <span className="px-4 py-4 text-gray-700 text-sm font-semibold cursor-pointer hover:text-red-500 transition-colors">
            ДАГЫ...
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
