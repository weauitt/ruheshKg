/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import News4 from "../../public/News4.jpeg";
import News6 from "../../public/News6.jpeg";
import News5 from "../../public/News5.jpeg";
import News2 from "../../public/News2.jpeg";
import News1 from "../../public/News1.jpeg";
import Concurs from "../../public/Concurs.jpeg";
import { CalendarDemo } from "../utils/Calendar";

// Компонент сайдабара справа, когда кликаете на новость или в другую любую навигацию
const Sidebar = () => {
  const articles = [
    {
      id: 1,
      title: "Жорж Оруэлл: Саясат жана англис тили",
      date: "22.11.2024",
      views: 1222,
      imageSrc: News4,
    },
    {
      id: 2,
      title: "О'Шакир: Кудай менен кезигиштим түрмөдөн",
      date: "29.11.2024",
      views: 997,
      imageSrc: News6,
    },
    {
      id: 3,
      title: "Мадина Тлостанова: Белгисиз кыздын портрети",
      date: "27.11.2024",
      views: 785,
      imageSrc: News5,
    },
    {
      id: 4,
      title: "Антон Чехов: Мансапкордун өлүмү",
      date: "29.11.2024",
      views: 555,
      imageSrc: News2,
    },
    {
      id: 5,
      title: "Анастасия Воронина",
      imageSrc: News1,
      date: "22.11.2024",
      views: 150,
    },
  ];
  return (
    <>
      {/* Популярные новости */}
      <section className="bg-white p-4 text-black rounded-[1px] shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Көп окулгандар</h2>
        <ul className="space-y-4">
          {articles.map((article) => (
            <li key={article.id} className="flex items-start py-3">
              <div className="w-[100px] h-16 relative">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  className="rounded-[2px]"
                  fill
                  style={{ objectFit: "cover", minWidth: "100px" }}
                />
              </div>
              <div className="flex-1 ml-4">
                <h3 className="text-sm font-semibold hover:text-red-600 hover:underline cursor-pointer">
                  {article.title}
                </h3>
                <div className="text-gray-500 text-xs mt-1">
                  <span>{article.date}</span> ·{" "}
                  <span>{article.views} көрүү</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Конкурс */}
      <section className="bg-white p-4 text-black rounded-[1px] shadow-md w-full max-w-md mt-2">
        <div className="flex flex-col">
          <h2>
            <strong>Котормо конкурсу</strong>
          </h2>
          <Image src={Concurs} alt="/" className="mt-4" width={300} />
        </div>
      </section>

      {/* Конкурстук чыгармалар */}
      <section className="bg-white p-4 text-black rounded-[1px] shadow-md w-full max-w-md mt-2">
        <h3>
          <strong>Конкурстук чыгармалар</strong>
        </h3>
        <ul className="space-y-4">
          {articles.map((article) => (
            <li key={article.id} className="flex items-start py-3">
              <div className="w-[100px] h-16 relative">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  className="rounded-[2px]"
                  fill
                  style={{ objectFit: "cover", minWidth: "100px" }}
                />
              </div>
              <div className="flex-1 ml-4">
                <h3 className="text-sm font-semibold hover:text-red-600 hover:underline cursor-pointer">
                  {article.title}
                </h3>
                <div className="text-gray-500 text-xs mt-1">
                  <span>{article.date}</span> ·{" "}
                  <span>{article.views} көрүү</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full h-px bg-gray-300" />
        <div className="flex justify-center items-center mt-3">
          <a className="" href="/">
            <strong>Баары</strong>
          </a>
        </div>
      </section>

      {/* Календарь */}
      <div className="bg-white p-4 text-black rounded-[1px] shadow-md w-full max-w-md mt-2">
        <CalendarDemo />
      </div>
    </>
  );
};

export default Sidebar;
