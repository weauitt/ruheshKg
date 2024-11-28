'use client'
import React, { useState, useEffect } from 'react';

const ScrollingText: React.FC = () => {
  const texts = [
    "Жашоо түзөлүү Индия элнин ишарасы",
    "Асыл ойлор: илим согушта жеңет",
    "Ар бир кадам – жеңишке жакындоо"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Индекс текущего текста
  const [visibleText, setVisibleText] = useState<number | null>(0); // Индекс видимого текста

  // Функция для смены текста
  useEffect(() => {
    // Функция для обновления текста
    const switchText = () => {
      setVisibleText(null); // Скрываем текущий текст
      setTimeout(() => {
        setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length); // Меняем текст по очереди
        setVisibleText(currentTextIndex); // Показываем новый текст
      }, 1000); // Задержка перед показом нового текста (аналогичная длительности анимации)
    };

    const interval = setInterval(switchText, 4000); // Смена текста каждые 4 секунды

    return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
  }, [currentTextIndex]); // Каждый раз, когда индекс изменяется, вызываем useEffect

  return (
    <div className="overflow-hidden relative h-5 w-full">
      <div className="animate-slide-text">
        {texts.map((text, index) => (
          <p
            key={index}
            className={`text-gray-600 text-sm transition-opacity duration-1000 ${
              index === visibleText ? 'visible' : ''
            }`}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
