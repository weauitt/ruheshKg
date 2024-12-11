"use client";
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import NewOne from "../../../../public/News1.jpeg";
import NewTwo from "../../../../public/News2.jpeg";
import NewThree from "../../../../public/News3.jpeg";
import NewFour from "../../../../public/News4.jpeg";
import NewFive from "../../../../public/News5.jpeg";
import NewSix from "../../../../public/News6.jpeg";
import { FaCalendarAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import descData from "../../../utils/News_desciption.json";
import { SocialNetwork } from "./socialNetwork/socialNetwork";
import CommentForm from "./commentForm/CommentForm";
import { useEffect, useRef, useState } from "react";
import CommentDisplay from "./commentForm/CommentDisplay";
import Sidebar from "../../../utils/Sidebar";

interface CommentData {
  name: string;
  comment: string;
}

// Это компонент при клике на новость, открывается новая страница

const NewsPage = () => {
  const [comments, setComments] = useState<CommentData[]>([]);
  const params = useParams();
  const { id: newsId } = params;
  const t = useTranslations("Path");
  const isInitialized = useRef(false);

  // Данные новостей
  const newsData = {
    "1": {
      name: "Жолубек Канышбаев: Шаќырулган чаңгырмаларын даярдай сереп",
      description:
        "Эгер “РухЭш” сайтынын ишмердиги токтоп калбашын кааласаңыз, бизди колдоо үчүн төмөнкү банктык эсебибизге...",
      image: NewOne,
      date: "22.11.2024",
      views: 185,
    },
    "2": {
      name: "Жорж Орвулл: Сенат жана англис тили",
      description:
        "Эгер “РухЭш” сайтынын ишмердиги токтоп калбашын кааласаңыз, бизди колдоо үчүн төмөнкү банктык эсебибизге...",
      image: NewTwo,
      date: "22.11.2024",
      views: 245,
    },
    "3": {
      name: "Роулд Даль: Песни[1] жашы",
      description:
        "Эгер “РухЭш” сайтынын ишмердиги токтоп калбашын кааласаңыз, бизди колдоо үчүн төмөнкү банктык эсебибизге...",
      image: NewThree,
      date: "22.11.2024",
      views: 248,
    },
    "4": {
      name: "Эзран Роттердамски: Келесоолукту даңкттоо",
      description:
        "Эгер “РухЭш” сайтынын ишмердиги токтоп калбашын кааласаңыз, бизди колдоо үчүн төмөнкү банктык эсебибизге...",
      image: NewFour,
      date: "22.11.2024",
      views: 158,
    },
    "5": {
      name: "Петро Олежов",
      description:
        "Эгер “РухЭш” сайтынын ишмердиги токтоп калбашын кааласаңыз, бизди колдоо үчүн төмөнкү банктык эсебибизге...",
      image: NewFive,
      date: "22.11.2024",
      views: 145,
    },
    "6": {
      name: "Анастасия Воронина",
      description:
        "Эгер “РухЭш” сайтынын ишмердиги токтоп калбашын кааласаңыз, бизди колдоо үчүн төмөнкү банктык эсебибизге...",
      image: NewSix,
      date: "22.11.2024",
      views: 150,
    },
  };

  const news = newsData[newsId as keyof typeof newsData];

  // Загрузка комментариев из localStorage
  useEffect(() => {
    if (!isInitialized.current && newsId) {
      const storedComments = localStorage.getItem(`comments_${newsId}`);
      if (storedComments) {
        setComments(JSON.parse(storedComments)); // Загружаем только один раз
      } else {
        setComments([]); // Если комментариев нет
      }
      isInitialized.current = true; // Устанавливаем флаг
    }
  }, [newsId]);

  useEffect(() => {
    if (newsId) {
      localStorage.setItem(`comments_${newsId}`, JSON.stringify(comments)); // Сохраняем изменения
    }
  }, [comments, newsId]);

  const handleCommentSubmit = (name: string, comment: string) => {
    const newComment = { name, comment };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
  };

  if (!news) {
    return <div>Новость не найдена</div>;
  }

  const newsArray = Object.values(newsData).slice(0, 3);

  return (
    <article className="flex containerNewsPage">
      <section className="containerNewsPage py-6">
        <div className="text-[13px] text-gray-500 p-3 bg-white rounded-[2px]  inline-flex items-center whitespace-nowrap">
          <a href="/" className="text-black hover:text-red-600 duration-300">
            {t("Homepage")}
          </a>
          <span className="mx-1">/</span>
          <span className="text-sm text-gray-800 font-bold">
            {news.name.length > 10
              ? `${news.name.substring(0, 10)}...`
              : news.name}
          </span>
        </div>

        {/* Новость */}
        <section className="text-black bg-[white] mt-4 max-w-[690px] rounded-[2] ">
          <div className="ml-4 pt-4 ">
            <h1 className="text-3xl mb-2 ">{news.name}</h1>
            <div className="text-sm text-gray-600 mb-4 flex items-center space-x-2">
              <FaCalendarAlt /> <p>{news.date}</p>
              <IoEyeSharp />
              <p>{news.views}</p>
            </div>
          </div>
          <div className="mb-4 containerNewsPageImg">
            <Image
              src={news.image}
              alt="Новость"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="px-4 text-gray-800 leading-relaxed space-y-4">
            {descData.map((item) => (
              <div key={item.id}>
                <p className="text-2xl font-bold">{item.descOne}</p>
                <p className="mt-4">{item.descTwo}</p>
                <p className="mt-4">{item.descThree}</p>
                <p className="mt-4">{item.descFour}</p>
                <p className="mt-4">{item.descFive}</p>
              </div>
            ))}
          </div>

          <div className="text-3xl text-[#dd1f1f] font-bold text-center italic mt-6">
            Эгер “РухЭш” сайтынын ишмердиги токтоп калбашын кааласаңыз, бизди
            колдоо үчүн төмөнкү банктык эсебибизге өз каалооңузга жараша акча
            которо аласыз...
            <br /> Мбанк+996700532585 жана Оптимабанк-4169585341612561.
          </div>

          {/* СоцСети */}
          <SocialNetwork />
        </section>

        {/* Похожие новости */}
        <section className="bg-[white] mt-4 max-w-[690px] rounded-[2] text-black">
          <h1 className="text-lg font-bold ml-4 pt-3">Окшош материалдар</h1>
          <hr className="border-t-2 border-gray-200 mt-3" />
          <div className="grid grid-cols-3 gap-4">
            {newsArray.map((news, index) => (
              <div
                key={index}
                className="flex flex-col items-center  rounded-lg p-4"
              >
                <Image
                  src={news.image}
                  alt={news.name}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
                <h3 className="text-sm font-bold  mb-1 text-[#3d3d3d]">
                  {news.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Комментарии */}
        <CommentDisplay comments={comments} />
        <CommentForm onSubmit={handleCommentSubmit} />
      </section>

      {/* Сайдбар справа */}
      <section className="py-20">
        <Sidebar />
      </section>
    </article>
  );
};

export default NewsPage;
