'use client'

import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaSearch } from "react-icons/fa";  // Иконка стрелочки вниз и поиска
import SubRubrikalar from './ModalOkno/subRubrikalar'; // Импортируем компонент Dropdown
import SubNuska from './ModalOkno/subNuska'; // Импортируем компонент Dropdown
import SubBiz from './ModalOkno/subBiz'; // Импортируем компонент Dropdown
import { useTranslations } from "next-intl";






function CategoriesList() {
  const t = useTranslations("Navigation");
  
  const categories = [
    {
      name: t("rubriki"),
      hasArrow: true,
      SubRubrikalar: [
        { name: "economic", route: "/economic" },
        { name: "literature", route: "/literature" },
        { name: "politics", route: "/politics" },
        { name: "society", route: "/society" },
      ],
    },
    { name: t("dasmiya"), hasArrow: false },
    { name: t("Islam"), hasArrow: false },
    {
      name: t("nuska"),
      hasArrow: true,
      SubNuska: [{ name: "contest", route: "/contest" }],
    },
    {
      name: t("aboutUs"),
      hasArrow: true,
      SubBiz: [
        { name: "aboutSite", route: "/AboutUs" },
        { name: "contacts", route: "/Contacts" },
      ],
    },
    { name: t("partners"), hasArrow: false },
    { name: t("zharnama"), hasArrow: false },
  ];
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null); // Ссылка на контейнер

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Когда верхняя часть CategoriesList появляется на экране
        if (entry.isIntersecting) {
          setIsSticky(true); // Включаем sticky
        } else {
          setIsSticky(false); // Отключаем sticky, когда элемент выходит из экрана
        }
      },
      {
        threshold: 0, // срабатывает, когда элемент полностью выходит из области видимости
        rootMargin: '0px 0px 0px 0px', // Можно настроить дополнительное смещение
      }
    );

    if (ref.current) {
      observer.observe(ref.current); // Начинаем отслеживание
    }

    // Очистка наблюдателя
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <nav
      ref={ref}
      className={`bg-white text-black p-4 mx-auto transition-all duration-300 ${isSticky ? 'sticky top-0 z-10 shadow-md' : ''}`}
    >
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-32">
        <ul className="flex justify-center space-x-6">
          {categories.map((category, index) => (
            <li 
              key={index}
              className="relative flex items-center cursor-pointer py-2 rounded-lg border border-transparent hover:text-red-600 group"
            >
              <span className="font-bold uppercase text-[12px]">{category.name}</span>
              {/* Показываем стрелку вниз, только если есть поле hasArrow */}
              {category.hasArrow && <FaChevronDown className="ml-2 text-black" />}
              
              {/* Если есть подкатегории SubRubrikalar, передаем их в компонент SubRubrikalar */}
              {category.SubRubrikalar && <SubRubrikalar subCategories={category.SubRubrikalar} />}
              
              {category.SubNuska && <SubNuska subCategories={category.SubNuska} />}

              {category.SubBiz && <SubBiz subCategories={category.SubBiz} />} 
            </li>
          ))}
        </ul>

        {/* Иконка поиска */}
        <div className="flex items-center px-4 py-2 rounded-lg cursor-pointer">
          <FaSearch className="text-black" />
        </div>
      </div>
    </nav>
  );
}

export default CategoriesList;


