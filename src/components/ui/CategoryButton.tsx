import React from "react";
import { Category } from "../../App";

type Props = {
  category: Category;
  onCategorySelect: (category: Category) => void;
};

const CategoryButton: React.FC<Props> = ({ category, onCategorySelect }) => {
  return (
    <button onClick={() => onCategorySelect(category)}>{category.name}</button>
  );
};

export default CategoryButton;
