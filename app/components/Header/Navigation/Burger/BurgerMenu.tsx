'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import SubRubrikalar from "../ModalOkno/subRubrikalar";
import SubNuska from "../ModalOkno/subNuska";
import SubBiz from "../ModalOkno/subBiz";
import { SubCategory } from '../ModalOkno/types';
import { useUser } from "@auth0/nextjs-auth0/client";
import { LoginButton } from "@/app/Authentication/LoginButton";
import { LogoutBurgerButton } from "@/app/Authentication/LogoutBurgerButton";

interface Category {
  name: string;
  route?: string;
  hasArrow?: boolean;
  SubRubrikalar?: SubCategory[];
  SubNuska?: SubCategory[];
  SubBiz?: SubCategory[];
}

interface BurgerMenuProps {
  categories: Category[];
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ categories }) => {
  const { user, error} = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubCategories, setOpenSubCategories] = useState<{ [key: string]: boolean }>({});

  const toggleSubCategory = (categoryName: string) => {
    setOpenSubCategories(prevState => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
  };

  
  if (error) return <div>{error.message}</div>;

  return (
    <>
      {/* Кнопка открытия */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="text-xl text-black z-50"
        >
          ☰
        </button>
      )}

      {/* Боковое меню */}
      <div
        className={`fixed top-0 left-0 w-[20rem] h-full z-10 bg-[#24252f] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full "
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl z-50"
        >
          <FaTimes />
        </button>
        <ul className="p-4 space-y-4 text-[#c1c1c1]">
        {!user ? <LoginButton /> : <LogoutBurgerButton/>  
                  }
          {categories.map((category, index) => (
            <li key={index} className="relative flex items-center cursor-pointer py-2 rounded-lg border border-transparent  group">
              {category.route ? (
                <Link href={category.route} onClick={() => setIsOpen(false)}>
                  <span className="font-bold uppercase text-[14px]  ">{category.name}</span>
                </Link>
              ) : (
                <div className="flex flex-col">
                  <span
                    className="font-bold uppercase text-[14px] flex items-center  "
                    onClick={() => toggleSubCategory(category.name)} // Триггер для открытия/закрытия подкатегории
                  >
                    {category.name}
                    {category.hasArrow && <FaChevronDown className="ml-2" />}
                  </span>

                  {/* Открытие подкатегорий при клике */}
                  {category.SubRubrikalar && openSubCategories[category.name] && (
                    <div className="text-[#9b8e8e] w-[236] pl-2 mt-2 border-t border-gray-300">
                      <SubRubrikalar
                        subCategories={category.SubRubrikalar}
                        onClick={() => setIsOpen(false)}
                      />
                    </div>
                  )}

                  {category.SubNuska && openSubCategories[category.name] && (
                    <div className="text-[#9b8e8e] w-[236] pl-2 mt-2 border-t border-gray-300">
                      <SubNuska
                        subCategories={category.SubNuska}
                        onClick={() => setIsOpen(false)}
                      />
                    </div>
                  )}

                  {category.SubBiz && openSubCategories[category.name] && (
                    <div className="text-[#9b8e8e] w-[236] pl-2 mt-2 border-t border-gray-300">
                      <SubBiz
                        subCategories={category.SubBiz}
                        onClick={() => setIsOpen(false)}
                      />
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
