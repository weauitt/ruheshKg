import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { useTranslations, useLocale } from 'next-intl';  // Импортируем useLocale
import SubRubrikalar from './ModalOkno/subRubrikalar';
import SubNuska from './ModalOkno/subNuska';
import SubBiz from './ModalOkno/subBiz';

function CategoriesList() {
  const t = useTranslations("Navigation");
  const locale = useLocale();  // Получаем текущую локаль

  const categories = [
    {
      name: t("rubriki"),
      hasArrow: true,
      SubRubrikalar: [
        { name: t("economic"), route: `/${locale}/economic` }, // Формируем путь с локалью
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

  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

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
            <li key={index} className="relative flex items-center cursor-pointer py-2 rounded-lg border border-transparent hover:text-red-600 group">
              <span className="font-bold uppercase text-[12px]">{category.name}</span>
              {category.hasArrow && <FaChevronDown className="ml-2 text-black" />}
              
              {category.SubRubrikalar && <SubRubrikalar subCategories={category.SubRubrikalar} />}
              {category.SubNuska && <SubNuska subCategories={category.SubNuska} />}
              {category.SubBiz && <SubBiz subCategories={category.SubBiz} />}
            </li>
          ))}
        </ul>

        <div className="flex items-center px-4 py-2 rounded-lg cursor-pointer">
          <FaSearch className="text-black" />
        </div>
      </div>
    </nav>
  );
}

export default CategoriesList;
