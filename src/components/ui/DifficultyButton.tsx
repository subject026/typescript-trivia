import React from "react";
import { Difficulty } from "../DifficultySelect";

type Props = {
  difficulty: Difficulty;
  onDifficultySelect: (difficulty: Difficulty) => void;
};

const CategoryButton: React.FC<Props> = ({
  difficulty,
  onDifficultySelect,
}) => {
  return (
    <button onClick={() => onDifficultySelect(difficulty)}>{difficulty}</button>
  );
};

export default CategoryButton;
