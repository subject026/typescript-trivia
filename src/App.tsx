import React, { useEffect, useState } from "react";

import Container from "./components/ui/Container";
import Heading from "./components/ui/Heading";

import QuestionCard from "./components/QuestionCard";
import { fetchCategories, fetchQuizQuestions } from "./components/TriviaAPI";

export type AppState = {
  questions: Question[];
  number: number;
  quizIsComplete: boolean;
};

export type Question = {
  question: string;
  correctAnswer: string;
  answers: string[];
  isCorrect?: boolean;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export enum Category {
  MYTHOLOGY = 20,
}

const TOTAL_QUESTIONS = 10;

const initialState: AppState = {
  questions: [],
  number: 0,
  quizIsComplete: false,
};

const App: React.FC = () => {
  const [state, setState] = useState(initialState);
  // const startTrivia = () => {};

  // const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {};

  // const nextQuestion = () => {};

  const handleUserAnswer = (isCorrect: boolean) => {
    console.log(
      `question ${state.number} is ${isCorrect ? "correct" : "incorrect"}`
    );
    setState((state) => {
      const newState = { ...state };
      newState.questions[state.number].isCorrect = isCorrect;
      console.log(state.number, "\n", state.questions.length);
      if (state.number + 1 === state.questions.length) {
        newState.quizIsComplete = true;
      } else {
        newState.number = state.number + 1;
      }

      return newState;
    });
  };

  useEffect(() => {
    (async () => {
      await fetchCategories();
      const questions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Category.MYTHOLOGY,
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
  }, []);

  const { questions, number, quizIsComplete } = state;
  console.log("number: ", number);
  return (
    <Container>
      <Heading>React QUIZ</Heading>

      {/* display categories for selection */}

      {/* get questions based on category selected and  */}

      {questions.length && !quizIsComplete && (
        <QuestionCard
          question={questions[number]}
          callback={handleUserAnswer}
          // userAnswer
          questionNr={number}
          totalQuestions={questions.length}
        />
      )}

      {quizIsComplete && <h2>Boom</h2>}
    </Container>
  );
};

export default App;
