"use client";

import Slider from "react-slick";
import { FaCalendarAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img1 from "../../../../public/img1.jpeg";
import img2 from "../../../../public/img2.jpeg";
import img3 from "../../../../public/img3.jpeg";
import img4 from "../../../../public/img4.jpeg";
import imgOne from "../../../../public/imgOne.jpeg";
import imgTwo from "../../../../public/imgTwo.jpeg";
import imgThree from "../../../../public/imgThree.jpeg";
import "../../../utils/animation.css";
import SlideText from "@/app/utils/SlideText";

function Carousel() {
  // Данные для статичных изображений
  const staticImages = [
    {
      title: "Гулзат Бектемир: Итике",
      date: "12.11.2024",
      views: "3831",
      image: img1,
    },
    {
      title: "Каухар Биймат кызы: О'Шакир: Ойсоке",
      date: "13.11.2024",
      views: "8149",
      image: img2,
    },
    {
      title: "Акылман элди рухий күчү айландырып",
      date: "05.11.2024",
      views: "18027",
      image: img3,
    },
    {
      title: "Бельгиянын автору: Эгердуу шамалы",
      date: "12.11.2024",
      views: "767",
      image: img4,
    },
  ];

  // Данные для слайдера
  const sliderImages = [
    {
      title: "Арбаев элди рухий күчү айландырып",
      date: "16.11.2024",
      views: "519",
      image: imgOne,
    },
    {
      title: "Арбаев элди рухий күчү айландырып",
      date: "16.11.2024",
      views: "519",
      image: imgTwo,
    },
    {
      title: "Арбаев элди рухий күчү айландырып",
      date: "16.11.2024",
      views: "519",
      image: imgThree,
    },
  ];

  // Настройки для react-slick
  const settings = {
    dots: true, // Показывать точки навигации
    infinite: true,
    speed: 500,
    fade: true, // Включаем эффект fade
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Автопрокрутка слайдов
    autoplaySpeed: 3000, // Интервал прокрутки слайдов
    arrows: false,
  };

  return (
    <div className="bg-gray-200 ">
      <div className="py-6 max-w-screen-xl mx-auto px-32">
        {/* Верхняя строка */}
        <div className="flex items-center">
          {/* Кнопка */}
          <div className="flex items-center bg-[#1b1c26] text-white py-[7px] px-3 text-[12px] w-[90px] uppercase font-bold ">
            Эң соңку
          </div>

          {/* Стрелка */}
          <div className="flex items-center">
            <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[16px] border-l-[#1b1c26]"></div>
          </div>

          {/* Текст с анимацией */}
          <div className="ml-8">
            <SlideText />
          </div>
        </div>

        {/* Контейнер с слайдером и статичными изображениями */}
        <div className="max-w-screen-xl mx-auto mt-6">
          <div className="flex justify-between items-center">
            {/* Статичные изображения слева */}
            <div className="flex flex-col w-1/4 ">
              {staticImages.slice(0, 2).map((slide, index) => (
                <div key={index} className="relative overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={300} // Уменьшена ширина
                    height={200} // Фиксированная высота
                    className="object-cover rounded-lg max-w-full scale-110  "
                  />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t  w-full text-white p-2">
                    <h4 className="text-lg font-semibold">{slide.title}</h4>
                    <div className="flex">
                      <FaCalendarAlt />
                      <p className="text-sm ml-1">{slide.date}</p>

                      <IoEyeSharp className="ml-1" />
                      <p className="text-xs ml-1">{slide.views} просмотров</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Слайдер в центре (большой) */}
            <div className="w-1/2 relative">
              <Slider {...settings}>
                {sliderImages.map((slide, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={750} // Увеличена ширина
                      height={500} // Увеличена высота
                      className="object-cover rounded-lg max-w-full scale-150"
                    />
                    <div className="absolute bottom-0 left-0 bg-gradient-to-t  w-full text-white p-2">
                      <h4 className="text-3xl font-semibold">{slide.title}</h4>
                      <div className="flex">
                      <FaCalendarAlt />
                      <p className="text-sm ml-1">{slide.date}</p>

                      <IoEyeSharp className="ml-1" />
                      <p className="text-xs ml-1">{slide.views} просмотров</p>
                    </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Статичные изображения справа */}
            <div className="flex flex-col w-1/4 ">
              {staticImages.slice(2, 4).map((slide, index) => (
                <div key={index} className="relative overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={300} // Уменьшена ширина
                    height={200} // Фиксированная высота
                    className="object-cover rounded-lg max-w-full scale-150"
                  />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t  w-full text-white p-2">
                    <h4 className="text-lg font-semibold">{slide.title}</h4>
                    <div className="flex">
                      <FaCalendarAlt />
                      <p className="text-sm ml-1">{slide.date}</p>

                      <IoEyeSharp className="ml-1" />
                      <p className="text-xs ml-1">{slide.views} просмотров</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
