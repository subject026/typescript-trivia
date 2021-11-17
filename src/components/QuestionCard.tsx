import React from "react";

import { Question } from "../App";

type Props = {
  question?: Question;
  answers?: string[];
  callback?: any;
  userAnswer?: boolean;
  questionNr?: number;
  totalQuestions?: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div className="p-8 bg-green-200">
      <p>
        Question: {questionNr} / {totalQuestions}
      </p>

      {/* <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default QuestionCard;
