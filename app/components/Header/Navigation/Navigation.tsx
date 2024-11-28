'use client'
import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl"; // Импортируем useLocale
import SubRubrikalar from "./ModalOkno/subRubrikalar";
import SubNuska from "./ModalOkno/subNuska";
import SubBiz from "./ModalOkno/subBiz";
import BurgerMenu from "./Burger/BurgerMenu"; // Импортируем компонент бургер-меню
import Image from "next/image";
import logo from "../../../../public/logo.png";

function CategoriesList() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const [isMobile, setIsMobile] = useState(false); // Следит за шириной экрана
  const [isMobileTwo, setIsMobileTwo] = useState(false); // Следит за шириной экрана

  const ref = useRef(null);

  // Состояние для открытия подкатегорий
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const categories = [
    {
      name: t("rubriki"),
      hasArrow: true,
      SubRubrikalar: [
        { name: t("economic"), route: `/${locale}/economic` },
        { name: t("literature"), route: `/${locale}/literature` },
        { name: t("politics"), route: `/${locale}/politics` },
        { name: t("society"), route: `/${locale}/society` },
        { name: t("madaniyat"), route: `/${locale}/madaniyat` },
        { name: t("media"), route: `/${locale}/media` },
        { name: t("mekendesh"), route: `/${locale}/mekendesh` },
        { name: t("ospurum"), route: `/${locale}/ospurum` },
      ],
    },
    { name: t("dasmiya"), hasArrow: false },
    { name: t("Islam"), hasArrow: false },
    {
      name: t("nuska"),
      hasArrow: true,
      SubNuska: [{ name: t("contest"), route: `/${locale}/contest` }],
    },
    {
      name: t("aboutUs"),
      hasArrow: true,
      SubBiz: [
        { name: t("aboutSite"), route: `/${locale}/aboutSite` },
        { name: t("contact"), route: `/${locale}/contact` },
      ],
    },
    { name: t("partners"), hasArrow: false },
    { name: t("zharnama"), hasArrow: false },
  ];

  useEffect(() => {
    // Отслеживание ширины экрана
    const handleResize = () => setIsMobile(window.innerWidth <= 930);
    handleResize(); // Установить состояние при загрузке
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Отслеживание ширины экрана
    const handleResize = () => setIsMobileTwo(window.innerWidth <= 775);
    handleResize(); // Установить состояние при загрузке
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleCategory = (categoryName: string) => {
    // Меняем состояние открытой категории по клику
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  const handleMouseEnter = (categoryName: string) => {
    // Открываем подкатегорию при наведении
    if (!isMobile) {
      setOpenCategory(categoryName);
    }
  };

  const handleMouseLeave = (categoryName: string) => {
    // Закрываем подкатегорию при уходе мыши
    if (!isMobile && openCategory === categoryName) {
      setOpenCategory(null);
    }
  };

  return (
    <nav
      ref={ref}
      className={`bg-white text-black p-3 pl-4 pr-4 mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center containerNavigation">
        {/* Бургер-меню слева */}
        {isMobile && (
          <div className="flex justify-start items-center">
            <BurgerMenu categories={categories} />
          </div>
        )}

        {/* Навигация по категориям */}
        {!isMobile && (
          <ul className="flex justify-start space-x-6">
            {categories.map((category, index) => (
              <li
                key={index}
                className="relative flex items-center cursor-pointer py-2 border border-transparent"
                onClick={() =>
                  isMobile &&
                  category.hasArrow &&
                  handleToggleCategory(category.name)
                }
                onMouseEnter={() => handleMouseEnter(category.name)}
                onMouseLeave={() => handleMouseLeave(category.name)}
              >
                {/* Основная категория */}
                <span className="font-bold uppercase text-[12px]">
                  {category.name}
                </span>
                {category.hasArrow && (
                  <FaChevronDown className="ml-2 text-black" />
                )}

                {/* Подкатегории */}
                {category.SubRubrikalar && openCategory === category.name && (
                  <SubRubrikalar
                    subCategories={category.SubRubrikalar}
                    className="absolute left-0 top-full bg-white shadow-lg border border-gray-200 z-10"
                    onClick={() => setOpenCategory(null)}
                  />
                )}

                {category.SubNuska && openCategory === category.name && (
                  <SubNuska
                    subCategories={category.SubNuska}
                    className="absolute left-0 top-full bg-white shadow-lg border border-gray-200 z-10"
                    onClick={() => setOpenCategory(null)}
                  />
                )}

                {category.SubBiz && openCategory === category.name && (
                  <SubBiz
                    subCategories={category.SubBiz}
                    className="absolute left-0 top-full bg-white shadow-lg border border-gray-200 z-10"
                    onClick={() => setOpenCategory(null)}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
        {isMobileTwo ? <Image src={logo} alt="" className="w-[150px]" /> : ""}
        {/* Поиск справа */}
        <div className="flex justify-end items-center px-4 py-2 cursor-pointer">
          <FaSearch className="text-black" />
        </div>
      </div>
    </nav>
  );
}

export default CategoriesList;
