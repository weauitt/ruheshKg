import Link from "next/link";
import '../../../../utils/subRubrikalar.css'

interface SubRubrikalarProps {
  subCategories: { name: string; route: string }[];
  onClick: () => void;  // Типизация onClick
}

// Пример для SubRubrikalar
const SubRubrikalar: React.FC<SubRubrikalarProps> = ({ subCategories, onClick }) => (
  <div className="subRubrikalar" onClick={onClick}>
    {subCategories.map((subCategory, index) => (
      <div
        key={index}
        className="subCategory hover:text-red-600"
      >
        <Link href={subCategory.route}>
          {subCategory.name}
        </Link>
      </div>
    ))}
  </div>
);


export default SubRubrikalar;