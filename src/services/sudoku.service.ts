import axios from "axios";
import type {
  Board,
  BoardResponse,
  Difficulty,
  SolveResponse,
  SudokuRequest,
  ValidateResponse,
} from "../types/board.types";
import { DIFFICULTIES_MAP, DIFFICULTIES_VALUES } from "../constants";

const API_URL = "https://sugoku.onrender.com";

const encodeBoard = (board: Board) =>
  board.reduce(
    (result, row, i) =>
      result +
      `%5B${encodeURIComponent(row.join(","))}%5D${
        i === board.length - 1 ? "" : "%2C"
      }`,
    ""
  );

const encodeParams = (params: { board: Board }) =>
  Object.keys(params)
    .map(
      (key) =>
        key + "=" + `%5B${encodeBoard(params[key as keyof typeof params])}%5D`
    )
    .join("&");

export const getSudokuBoard = async (
  difficulty: Difficulty
): Promise<{ data: BoardResponse; difficulty: Difficulty }> => {
  if (difficulty === DIFFICULTIES_MAP.RANDOM) {
    const difficulties: Difficulty[] = DIFFICULTIES_VALUES.filter(
      (d) => d !== DIFFICULTIES_MAP.RANDOM
    );
    const randomIndex = Math.floor(Math.random() * difficulties.length);
    difficulty = difficulties[randomIndex];
  }

  const { data } = await axios.get(`${API_URL}/board?difficulty=${difficulty}`);
  return { data, difficulty };
};

export const validateSudokuBoard = async (
  boardReq: SudokuRequest
): Promise<ValidateResponse> => {
  const { data } = await axios.post(
    `${API_URL}/validate`,
    encodeParams(boardReq),
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );
  return data;
};

export const solveSudokuBoard = async (
  boardReq: SudokuRequest
): Promise<SolveResponse> => {
  const { data } = await axios.post(
    `${API_URL}/solve`,
    encodeParams(boardReq),
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );
  return data;
};
