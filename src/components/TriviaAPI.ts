import { decode } from "html-entities";

import { Difficulty } from "../App";

export const fetchCategories = async () => {
  const res = await fetch("https://opentdb.com/api_category.php");
  const data = await res.json();
  console.log({ data });
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

    return {
      question: decode(question),
      answers: jumble([correct_answer, ...incorrect_answers]),
      correctAnswer: correct_answer,
    };
  });

  console.log(questions);
  return questions;
};
