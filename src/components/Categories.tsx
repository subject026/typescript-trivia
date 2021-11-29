import React from "react";

import { Category } from "../App";

type Props = {
  categories: Category[];
  onCategorySelect: (category: Category) => void;
};

const Categories: React.FC<Props> = ({ categories, onCategorySelect }) => (
  <>
    {categories.map((category) => (
      <button
        key={`key_${category.name}`}
        onClick={() => onCategorySelect(category)}
      >
        {category.name}
      </button>
    ))}
  </>
);

export default Categories;
