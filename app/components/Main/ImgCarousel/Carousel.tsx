"use client";

import Slider from "react-slick";
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
    <div className="bg-gray-100 py-6 max-w-screen-xl mx-auto px-32">
      {/* Верхний текст */}
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">
          Эң сонун
        </button>
        <p className="text-gray-600 text-sm">
          Асыл ойлор: илим согушта жеңет, өчүкүдө жеңет, илим эсе артың
        </p>
      </div>

      {/* Контейнер с слайдером и статичными изображениями */}
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Статичные изображения слева */}
          <div className="flex flex-col w-1/4 ">
            {staticImages.slice(0, 2).map((slide, index) => (
              <div key={index} className="relative overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={300}  // Уменьшена ширина
                  height={200}  // Фиксированная высота
                  className="object-cover rounded-lg max-w-full scale-110  "
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t  w-full text-white p-2">
                  <h4 className="text-lg font-semibold">{slide.title}</h4>
                  <p className="text-sm">{slide.date}</p>
                  <p className="text-xs">{slide.views} просмотров</p>
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
                    width={750}  // Увеличена ширина
                    height={500} // Увеличена высота
                    className="object-cover rounded-lg max-w-full scale-150"
                  />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t  w-full text-white p-2">
                    <h4 className="text-lg font-semibold">{slide.title}</h4>
                    <p className="text-sm">{slide.date}</p>
                    <p className="text-xs">{slide.views} просмотров</p>
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
                  width={300}  // Уменьшена ширина
                  height={200}  // Фиксированная высота
                  className="object-cover rounded-lg max-w-full scale-150"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t  w-full text-white p-2">
                  <h4 className="text-lg font-semibold">{slide.title}</h4>
                  <p className="text-sm">{slide.date}</p>
                  <p className="text-xs">{slide.views} просмотров</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
