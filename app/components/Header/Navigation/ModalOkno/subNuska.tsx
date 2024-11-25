'use client';

import Link from 'next/link';

const SubRubrikalar = ({ subCategories }: { subCategories: { name: string; route: string }[] }) => {
  return (
    <ul className="absolute top-full left-0  hidden group-hover:block bg-white shadow-lg border w-48">
      {subCategories.map((subCategory, index) => (
        <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer text-sm">
          {/* Используем Link для роутинга */}
          <Link className="text-black hover:text-red-600" href={subCategory.route} >
            {subCategory.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubRubrikalar;
