'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Navigation from '../Header/Navigation/Navigation';
import '../../utils/Header.css';

// Тип для изображения
type HeaderImage = {
  id: number;
  name: string;
  base64: string;
};

function Header() {
  const [images, setImages] = useState<HeaderImage[]>([]); 

  useEffect(() => {
    fetch("http://localhost:5000/api/header-images") // Запрос к серверу для получения Base64 изображений
      .then((response) => response.json())
      .then((data) => {
        setImages(data); // Устанавливаем данные изображений
      })
      .catch((error) => console.error("Ошибка при загрузке изображений:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-[420px] px-32 mx-auto max-w-screen-xl">
        <section className="flex justify-between items-start w-full">
          {/* Левое изображение */}
          <div className="flex justify-start items-start mt-4">
            {images.length > 0 && (
              <Image
                src={`data:image/png;base64,${images[0].base64}`} // Используем Base64 строку для логотипа
                alt="Logo"
                width={200}
                height={200}
                className="w-full h-auto object-contain"
              />
            )}
          </div>
          {/* Правое изображение */}
          <div className="flex justify-end items-start w-full mt-4">
            {images.length > 1 && (
              <Image
                src={`data:image/jpeg;base64,${images[1].base64}`} // Используем Base64 строку для другого изображения
                alt="Response Image"
                width={683}
                height={394}
                className="object-contain"
              />
            )}
          </div>
        </section>
      </div>
      <Navigation />
    </>
  );
}

export default Header;
