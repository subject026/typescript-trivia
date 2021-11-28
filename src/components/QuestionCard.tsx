import React from "react";

import { Question } from "../App";

type Props = {
  question: Question;
  callback: (isCorrect: boolean) => void;
  questionNr?: number;
  totalQuestions?: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  callback,
  questionNr,
  totalQuestions,
}) => {
  const handleAnswerClick = (answer: string) => {
    callback(answer === question.correctAnswer);
  };

  return (
    <div className="p-8 bg-gray-100">
      <p>
        Question: {questionNr} / {totalQuestions}
      </p>
      <p className="py-6 text-3xl font-bold text-gray-700 italic leading-normal">
        {question.question}
      </p>

      <ul className="py-3 text-xl">
        {question.answers.map((answer, i) => (
          <li
            key={i}
            className="mt-4 p-4 text-center border-4 border-gray-400 cursor-pointer hover:bg-green-400 hover:text-white"
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
