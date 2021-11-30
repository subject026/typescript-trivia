import React, { useEffect, useState } from "react";

import Container from "./components/ui/Container";
import Heading from "./components/ui/Heading";
import Spinner from "./components/ui/Spinner";
import CategorySelect from "./components/CategorySelect";
import DifficultySelect from "./components/DifficultySelect";
import QuestionCard from "./components/QuestionCard";
import { fetchCategories, fetchQuizQuestions } from "./components/TriviaAPI";
import Main from "./components/ui/Main";

import { Difficulty } from "./components/DifficultySelect";

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

const TOTAL_QUESTIONS = 10;

export type AppState = {
  categories: Category[];
  questions: Question[];
  selectedCategory: null | Category;
  selectedDifficulty: null | Difficulty;
  number: number;
  quizIsComplete: boolean;
};

const initialState: AppState = {
  categories: [],
  selectedCategory: null,
  selectedDifficulty: null,
  questions: [],
  number: 0,
  quizIsComplete: false,
};

const App: React.FC = () => {
  const [state, setState] = useState(initialState);

  const onCategorySelect = (category: Category): void => {
    setState((state) => {
      return {
        ...state,
        selectedCategory: category,
      };
    });
  };

  const onDifficultySelect = (difficulty: Difficulty): void => {
    setState((state) => {
      return {
        ...state,
        selectedDifficulty: difficulty,
      };
    });
  };

  const {
    categories,
    selectedCategory,
    selectedDifficulty,
    questions,
    number,
    quizIsComplete,
  } = state;

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
    if (!selectedDifficulty) return;
    const loadQuestions = async () => {
      if (selectedCategory !== null) {
        const questions = await fetchQuizQuestions(
          TOTAL_QUESTIONS,
          selectedCategory.id,
          selectedDifficulty
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
  }, [selectedCategory, selectedDifficulty]);

  return (
    <Container>
      <Heading>Quiz App</Heading>
      <Main>
        {categories.length < 1 && <Spinner />}
        {!selectedCategory && categories.length > 0 && (
          <CategorySelect
            categories={categories}
            onCategorySelect={onCategorySelect}
          />
        )}
        {/* !!! choose difficulty */}
        {selectedCategory && !selectedDifficulty && (
          <DifficultySelect onDifficultySelect={onDifficultySelect} />
        )}
        {questions.length > 0 && !quizIsComplete && (
          <QuestionCard
            question={questions[number]}
            callback={handleUserAnswer}
            questionNr={number}
            totalQuestions={questions.length}
          />
        )}

        {/* !!! render results */}
        {quizIsComplete && <h2>Boom</h2>}
      </Main>
    </Container>
  );
};

export default App;
