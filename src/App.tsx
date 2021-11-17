import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions } from "./components/TriviaAPI";

export type AppState = {
  questions: Question[];
  number: number;
};

export type Question = {
  question: string;
  correctAnswer: string;
  answers: string[];
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

const TOTAL_QUESTIONS = 10;

const initialState: AppState = {
  questions: [],
  number: 0,
};

const App: React.FC = () => {
  const [state, setState] = useState(initialState);
  const startTrivia = () => {};

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  useEffect(() => {
    console.log(state);
    (async () => {
      const questions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      );
      console.log(questions);
      setState((state: AppState) => {
        return {
          ...state,
          questions: [...questions],
        };
      });
    })();
  }, [fetchQuizQuestions]);

  const { questions, number } = state;
  return (
    <div className="h-screen bg-gray-200 h-full p-24 flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold text-blue-900">React QUIZ</h1>
      <img src={logo} className="w-32" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      {questions.length && (
        <QuestionCard
          question={questions[number]}
          // answers={[]}
          // callback={() => {}}
          // userAnswer
          questionNr={number}
          totalQuestions={questions.length}
        />
      )}
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
};

export default App;
