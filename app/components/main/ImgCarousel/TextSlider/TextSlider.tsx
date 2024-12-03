import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../../../utils/textSlider.css'

const TextSlider = () => {
  const textItems = [
    "Роман Гнатюк: Бери караң, Ленин ким болгон",
    "Асыл ойлор: миң согушта жеңгиче, өзүңдү жеңгениң миң эсе артык",
    "Жашоо тууралуу Индия элинин икаясы"
  ];

  const settings = {
    infinite: true,        // Бесконечный цикл
    speed: 2000,           // Скорость перехода между слайдами
    slidesToShow: 1,      // Количество видимых слайдов
    slidesToScroll: 1,    // Количество слайдов при скролле
    autoplay: true,       // Автоплей
    autoplaySpeed: 3000,  // Интервал в миллисекундах
  };

  return (
    <div className="max-h-[50px] max-w-[100vh] mt-3">
      <Slider {...settings}>
        {textItems.map((text, index) => (
          <div key={index}>
            <h3 className="cursor-pointer hover:text-[#c42929]">{text}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TextSlider;
