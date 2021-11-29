import React, { useEffect, useState } from "react";

import Container from "./components/ui/Container";
import Heading from "./components/ui/Heading";
import Spinner from "./components/ui/Spinner";
import Categories from "./components/Categories";
import QuestionCard from "./components/QuestionCard";
import { fetchCategories, fetchQuizQuestions } from "./components/TriviaAPI";
import Main from "./components/ui/Main";

export type Category = {
  id: number;
  name: string;
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

const TOTAL_QUESTIONS = 10;

export type AppState = {
  categories: Category[];
  questions: Question[];
  selectedCategory: null | Category;
  number: number;
  quizIsComplete: boolean;
};

const initialState: AppState = {
  categories: [],
  selectedCategory: null,
  questions: [],
  number: 0,
  quizIsComplete: false,
};

const App: React.FC = () => {
  const [state, setState] = useState(initialState);

  const oncategorySelect = (category: Category): void => {
    setState((state) => {
      return {
        ...state,
        selectedCategory: category,
      };
    });
  };

  const { categories, selectedCategory, questions, number, quizIsComplete } =
    state;

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
      const categories = await fetchCategories();
      setState((state: AppState) => ({
        ...state,
        categories: [...categories],
      }));
    })();
  }, []);

  useEffect(() => {
    const loadQuestions = async () => {
      if (selectedCategory !== null) {
        const questions = await fetchQuizQuestions(
          TOTAL_QUESTIONS,
          selectedCategory.id,
          Difficulty.EASY
        );
        console.log(questions);
        setState((state: AppState) => {
          return {
            ...state,
            questions: [...questions],
          };
        });
      } else {
        console.error("No category selected!");
      }
    };
    loadQuestions();
  }, [selectedCategory]);

  return (
    <Container>
      <Heading>Quiz App</Heading>
      <Main>
        {categories.length < 1 && <Spinner />}
        {!selectedCategory && categories.length > 0 && (
          <Categories
            categories={categories}
            onCategorySelect={oncategorySelect}
          />
        )}
        {/* !!! choose difficulty */}

        {questions.length > 0 && !quizIsComplete && (
          <QuestionCard
            question={questions[number]}
            callback={handleUserAnswer}
            questionNr={number}
            totalQuestions={questions.length}
          />
        )}

        {/* render results */}
        {quizIsComplete && <h2>Boom</h2>}
      </Main>
    </Container>
  );
};

export default App;
