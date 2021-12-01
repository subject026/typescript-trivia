import React from "react";

import { Question } from "../../App";

type Props = {
  question: Question;
};

const CategoryButton: React.FC<Props> = ({ question }) => {
  return (
    <li className="flex">
      <div>{question.question}</div>
      <div>{question.isCorrect ? "correct" : "incorrect"}</div>
    </li>
  );
};

export default CategoryButton;
