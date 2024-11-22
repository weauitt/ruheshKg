'use client'
 import { FaChevronDown, FaSearch } from "react-icons/fa";  // Иконка стрелочки вниз и поиска

const categories = [
  "РУБРИКАЛАР",
  "Дасмия",
  "Ислам дөөлөтү",
  "ЭЛ-КИТЕП",
  "Нуска",
  "Биз жөнүндө",
  "Өнөктөштөр",
  "Жарнама"
];

function CategoriesList() {


  return (
    <nav className="bg-white text-black p-4 px-32 mx-auto  max-w-screen-xl ">
      <div className="flex justify-between items-center ">
        <ul className="flex justify-center space-x-6">
          {categories.map((category, index) => (
            <li 
              key={index}
              className="flex items-center cursor-pointer  py-2 rounded-lg border border-transparent hover:text-red-600"
            >
              <span className="font-bold uppercase text-[12px]">{category}</span>
              {/* Стрелочка вниз */}
              <FaChevronDown className="ml-2 text-black" />
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
