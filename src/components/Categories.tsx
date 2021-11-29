import React from "react";

import CategoryButton from "./ui/CategoryButton";

import { Category } from "../App";

type Props = {
  categories: Category[];
  onCategorySelect: (category: Category) => void;
};

const Categories: React.FC<Props> = ({ categories, onCategorySelect }) => (
  <>
    {categories.map((category) => (
      <CategoryButton
        key={`key_${category.name}`}
        category={category}
        onCategorySelect={onCategorySelect}
      />
    ))}
  </>
);

export default Categories;
