type SubCategory = {
  name: string;
  route: string;
};

type SubRubrikalarProps = {
  subCategories: SubCategory[];
  className?: string;
  onClick?: () => void;
};

const SubRubrikalar: React.FC<SubRubrikalarProps> = ({
  subCategories,
  className,
  onClick,
}) => {
  return (
    <ul
      className={`absolute left-0 top-full bg-white shadow-lg border border-gray-200 overflow-hidden z-10 transition-all duration-300 ease-in-out ${className}`}
    >
      {subCategories.map((subCategory, index) => (
        <li
          key={index}
          className="px-4 py-2 text-[#808080] text-[14px] cursor-pointer hover:text-red-500 transition-colors duration-150"
          onClick={onClick}
        >
          <a href={subCategory.route} className="block w-full">
            {subCategory.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SubRubrikalar;
