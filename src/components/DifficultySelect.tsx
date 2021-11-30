import React from "react";

import DifficultyButton from "./ui/DifficultyButton";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

const difficulties = [Difficulty.EASY, Difficulty.MEDIUM, Difficulty.HARD];

type Props = {
  onDifficultySelect: (difficulty: Difficulty) => void;
};

const CategorySelect: React.FC<Props> = ({ onDifficultySelect }) => (
  <>
    {difficulties.map((difficulty) => (
      <DifficultyButton
        key={`key_${difficulty}`}
        difficulty={difficulty}
        onDifficultySelect={onDifficultySelect}
      />
    ))}
  </>
);

export default CategorySelect;
