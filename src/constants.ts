import type { Difficulty } from "./types/board.types";

export const DIFFICULTIES_MAP = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
  RANDOM: "random",
};

export const DIFFICULTIES_VALUES: Difficulty[] = [
  DIFFICULTIES_MAP.EASY,
  DIFFICULTIES_MAP.MEDIUM,
  DIFFICULTIES_MAP.HARD,
  DIFFICULTIES_MAP.RANDOM,
] as Difficulty[];

export const DIFFICULTIES = DIFFICULTIES_VALUES.map((level) => ({
  id: String(level),
  label: level,
}));
