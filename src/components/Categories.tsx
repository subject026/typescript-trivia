import React from "react";

import { Category } from "../App";

type Props = {
  categories: Category[];
};

const Categories: React.FC<Props> = ({ categories }) => (
  <>
    {categories.map((category) => (
      <h2>{category.name}</h2>
    ))}
  </>
);

export default Categories;
