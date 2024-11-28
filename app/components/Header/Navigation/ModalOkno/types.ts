export interface SubCategory {
    name: string;
    route: string;
  }
  
  interface SubRubrikalarProps {
    subCategories: SubCategory[];
    onClick: () => void; // Обязательный пропс
  }
  
  export default SubRubrikalarProps;
  