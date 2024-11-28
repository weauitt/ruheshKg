"use client";

import Slider from "react-slick";
import { FaCalendarAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import "../../../utils/Carousel.css";
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
// import SlideText from "@/app/utils/SlideText";
import "../../../utils/responsive.css";
import "../../../utils/Header.css";
import React from "react";

function Carousel() {
  const [isMobile, setIsMobile] = React.useState(false);
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  React.useEffect(() => {
    // Отслеживание ширины экрана
    const handleResize = () => setIsMobile(window.innerWidth <= 775);
    handleResize(); // Установить состояние при загрузке
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gray-200 ">
      <div className="py-6 container w">
        {/* Верхняя строка */}
        {!isMobile ? (
          <div className="flex items-center containerArrowNews">
            {/* Кнопка */}
            <div className="flex items-center bg-[#1b1c26] text-white py-[7px] px-3 text-[12px] w-[90px] uppercase font-bold ">
              Эң соңку
            </div>

            {/* Стрелка */}
            <div className="flex items-center">
              <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[16px] border-l-[#1b1c26]"></div>
            </div>

            {/* Текст с анимацией */}
            <div className="ml-7">
              <h1 className="text-[black]">Надо доделать</h1>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Контейнер с слайдером и статичными изображениями */}
        <div className="max-w-screen-xl mx-auto mt-6 containerCarousel">
          <div className="flex justify-between items-center overflow-x-hidden overflow">
            {/* Статичные изображения слева */}
            <div className="CarouselDelete">
              {!isMobile ? (
                <div className="flex flex-col  ">
                  {staticImages.slice(0, 2).map((slide, index) => (
                    <div
                      key={index}
                      className="relative w-[250px] h-[250px] overflow-hidden imgLeft "
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        layout="fill"
                        objectFit="cover"
                        className=""
                      />
                      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full text-white p-2">
                        <h4 className="text-lg font-semibold">{slide.title}</h4>
                        <div className="flex">
                          <FaCalendarAlt />
                          <p className="text-sm ml-1">{slide.date}</p>

                          <IoEyeSharp className="ml-1" />
                          <p className="text-xs ml-1">
                            {slide.views} просмотров
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>

            <div>
              <div className="flex justify-between items-center containerCarouselFlexColumn containerCarouselFixTwo">
                {/* Слайдер в центре (большой) */}
                <div className="relative w-[500px] h-[500px] mx-auto custom-slider imgCenter ">
                  <Slider {...settings}>
                    {sliderImages.map((slide, index) => (
                      <div key={index} className="relative w-full h-full ">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={500}
                          height={500}
                          className="object-cover ImgCenterWidth"
                        />
                        <div className="absolute bottom-2 left-0 bg-gradient-to-t from-black to-transparent w-full text-white p-2 Zatemnenie">
                          <h4 className="text-3xl font-semibold">
                            {slide.title}
                          </h4>
                          <div className="flex">
                            <FaCalendarAlt />
                            <p className="text-sm ml-1">{slide.date}</p>
                            <IoEyeSharp className="ml-1" />
                            <p className="text-xs ml-1">
                              {slide.views} просмотров
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* Статичные изображения справа */}

                <div className="flex flex-col imgRightColumn ">
                  {staticImages.slice(2, 4).map((slide, index) => (
                    <div
                      key={index}
                      className="relative w-[250px] h-[250px] overflow-hidden imgRight "
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        layout="fill"
                        objectFit="cover"
                        className=""
                      />
                      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full text-white p-2">
                        <h4 className="text-lg font-semibold">{slide.title}</h4>
                        <div className="flex">
                          <FaCalendarAlt />
                          <p className="text-sm ml-1">{slide.date}</p>

                          <IoEyeSharp className="ml-1" />
                          <p className="text-xs ml-1">
                            {slide.views} просмотров
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
