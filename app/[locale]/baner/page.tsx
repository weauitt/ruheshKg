'use client'
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useRef, useState } from "react";
import baner from "../../../public/05e24a833267b1f2a40c9270e3593f9794a8086d.jpeg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaCalendarAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { SocialNetwork } from "../news/[id]/socialNetwork/socialNetwork";
import NewOne from "../../../public/News1.jpeg";
import NewTwo from "../../../public/News2.jpeg";
import NewThree from "../../../public/News3.jpeg";
import CommentDisplay from "../news/[id]/commentForm/CommentDisplay";
import CommentForm from "../news/[id]/commentForm/CommentForm";
import { useParams } from "next/navigation";

interface CommentData {
  name: string;
  comment: string;
}

const Baner = () => {
  const [comments, setComments] = useState<CommentData[]>([]);
  const isInitialized = useRef(false);
  const params = useParams();
  const { id: newsId } = params;
  const Baner = {
    name: "Китепкөйлөргө сүйүнчү!",
    description:
      "“Улуу Тоолор” басмасы жарыкка чыгарган заманыбыздын залкар адабиятчысы Салижан Жигитовдун “Шуулдаба терегим, теректерим” (Ырлар, поэмалар, котормолор) жана “Күн тууду” (аңгеме, повесттер) аттуу эки томдук китебин сатып алууну каалагандар (Эрланга) 0708 72 68 24 чалыңыздар! Каалоочуларга Бишкек шаары боюнча жеткирип берүү мүмкүнчүлүгүбүз бар. О.э. 0558 85 57 88 номуруна чалсаңыздар болот!",
    image: baner,
    date: "24.11.2024",
    views: 991,
  };

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
  }

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

  const newsArray = Object.values(newsData).slice(0, 3);
  const t = useTranslations("Path");
  return (
    <div className="container py-6 ">
      <div className="text-[13px] text-gray-500 p-3 bg-white rounded-[2px]  inline-flex items-center whitespace-nowrap">
        <a href="/" className="text-black hover:text-red-600 duration-300">
          {t("Homepage")}
        </a>
        <span className="mx-1">/</span>
        <span className="text-sm text-gray-800 font-bold">{Baner.name}</span>
      </div>
      <section className="bg-white mt-4 text-black max-w-[690px] rounded-[2]">
        <div className="ml-4 pt-4">
          <h1 className="text-3xl mb-2">{Baner.name}</h1>
          <div className="text-sm text-gray-600 mb-4 flex items-center space-x-2">
            <FaCalendarAlt /> <p>{Baner.date}</p>
            <IoEyeSharp />
            <p>{Baner.views}</p>
          </div>
        </div>
        <Image src={Baner.image} alt="/" />

        <div className="text-3xl text-[#dd1f1f] font-bold text-center italic mt-6">
          <p>{Baner.description}</p>
        </div>
        
        <SocialNetwork />
      </section>

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
      <CommentDisplay comments={comments} />
      <CommentForm onSubmit={handleCommentSubmit} />
    </div>
  );
};

export default Baner;
