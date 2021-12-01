import React from "react";

import Result from "./ui/Result";

import { Question } from "../App";

type Props = {
  questions: Question[];
};

const CategorySelect: React.FC<Props> = ({ questions }) => (
  <>
    {questions.map((question, i) => (
      <Result key={`key_${i}`} question={question} />
    ))}
  </>
);

export default CategorySelect;
