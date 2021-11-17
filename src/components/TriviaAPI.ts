import { Difficulty } from "../App";

const jumble = (arr: string[]): string[] => {
  // const sliced;
  return arr;
};

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const API_URL = `https://opentdb.com/api.php?amount=${amount}&category=20&difficulty=${difficulty}&type=multiple`;

  const result = await (await fetch(API_URL)).json();

  const questions = result.results.map((item: any) => {
    const { question, incorrect_answers, correct_answer } = item;
    console.log(item);
    return {
      question,
      answers: jumble([correct_answer, ...incorrect_answers]),
      correctAnswer: correct_answer,
    };
  });

  console.log(questions);
  return questions;
};
