import { createSlice } from "@reduxjs/toolkit";
import type { Board } from "../types/board.types";

const STORAGE_KEY = "sudoku-board-state";
function loadState() {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch {
    return undefined;
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(state: any) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

const defaultState = {
  initialBoard: [] as Board,
  solution: [] as Board,
  difficulty: "easy" as "easy" | "medium" | "hard",
};

const persistedState = loadState();

const boardSlice = createSlice({
  name: "board",
  initialState: persistedState || defaultState,
  reducers: {
    setInitialBoard(state, action) {
      state.initialBoard = action.payload;
      saveState(state);
    },
    setSolution(state, action) {
      state.solution = action.payload;
      saveState(state);
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload;
      saveState(state);
    },
    resetGame(state) {
      state.initialBoard = [] as Board;
      state.solution = [] as Board;
      state.difficulty = "easy";
      saveState(state);
    },
  },
});

export const { setInitialBoard, setSolution, setDifficulty, resetGame } =
  boardSlice.actions;

export default boardSlice.reducer;
