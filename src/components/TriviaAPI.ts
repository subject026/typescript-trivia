import { decode } from "html-entities";

import { Category } from "../App";

import { Difficulty } from "./DifficultySelect";

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch("https://opentdb.com/api_category.php");
  const data = await res.json();
  console.log({ data });
  return [...data.trivia_categories];
};

const jumble = (arr: string[]): string[] => {
  // const sliced;
  return arr;
};

export const fetchQuizQuestions = async (
  amount: number,
  category: number,
  difficulty: Difficulty
) => {
  const API_URL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

  const result = await (await fetch(API_URL)).json();

  const questions = result.results.map((item: any) => {
    const { question, incorrect_answers, correct_answer } = item;

    console.log({ incorrect_answers, correct_answer });

    return {
      question: decode(question),
      answers: jumble(
        [correct_answer, ...incorrect_answers].map((q) => decode(q))
      ),
      correctAnswer: correct_answer,
    };
  });

  console.log(questions);
  return questions;
};
