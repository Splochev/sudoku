import { useSelector, useDispatch } from "react-redux";
import type { BoardNumber, RootState } from "../../types/board.types";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { setSolution } from "../../stores/boardSlice";
import theme from "../../theme";

interface SudokuGridProps {
  numberToFill: BoardNumber;
  setNumberToFill: (value: BoardNumber) => void;
  actionsWidth?: number;
}

const SudokuGrid = ({
  setNumberToFill,
  numberToFill,
  actionsWidth,
}: SudokuGridProps) => {
  const [focusedCell, setFocusedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const dispatch = useDispatch();
  const solution = useSelector((state: RootState) => state.board.solution);
  const initialBoard = useSelector(
    (state: RootState) => state.board.initialBoard
  );

  useEffect(() => {
    if (
      numberToFill.value > -1 &&
      numberToFill.col > -1 &&
      numberToFill.row > -1
    ) {
      const newSolution = solution.map((rowArr, rIdx) =>
        rowArr.map((cell, cIdx) =>
          rIdx === numberToFill.row && cIdx === numberToFill.col
            ? numberToFill.value === 0
              ? 0
              : numberToFill.value
            : cell
        )
      );
      dispatch(setSolution(newSolution));
      setNumberToFill({ row: -1, col: -1, value: -1 });
      setFocusedCell(null);
    }
  }, [numberToFill, setNumberToFill, solution, dispatch]);

  const gridSize = initialBoard.length;
  // Set the grid to be a perfect square with width = actionsWidth
  const gridPx = actionsWidth ? `${actionsWidth}px` : "100%";
  return (
    <Box
      sx={{
        width: gridPx,
        height: gridPx,
        maxWidth: gridPx,
        maxHeight: gridPx,
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        gap: 0.2,
        border: `3px solid ${theme.palette.primary.main}`,
        borderRadius: 2,
        overflow: "hidden",
        background: theme.palette.background.default,
        boxShadow: `0 4px 0 ${theme.palette.primary.main}, 0 8px 0 #000`,
        marginBottom: 4,
        marginTop: 2,
        transition:
          "width 0.3s cubic-bezier(.4,2,.6,1), height 0.3s cubic-bezier(.4,2,.6,1)",
      }}
    >
      {initialBoard.flatMap((row, rowIdx) =>
        row.map((cell, colIdx) => {
          const isInitial = cell > 0;
          const value = solution?.[rowIdx]?.[colIdx] || "";
          return (
            <Button
              key={`${rowIdx}-${colIdx}`}
              variant="contained"
              disabled={isInitial}
              onClick={() => {
                if (!isInitial) {
                  setNumberToFill({ row: rowIdx, col: colIdx, value: -1 });
                  setFocusedCell({ row: rowIdx, col: colIdx });
                }
              }}
              sx={{
                minWidth: 0,
                minHeight: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                p: 0,
                fontSize: {
                  xs: "0.7rem",
                  sm: "1.1rem",
                  md: "1.3rem",
                  lg: "1.7rem",
                  xl: "2.2rem",
                },
                fontFamily: theme.typography.fontFamily,
                color: isInitial
                  ? theme.palette.text.primary
                  : theme.palette.secondary.main,
                background:
                  focusedCell &&
                  focusedCell.row === rowIdx &&
                  focusedCell.col === colIdx
                    ? theme.palette.action.selected
                    : isInitial
                    ? `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`
                    : `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
                border: isInitial
                  ? `2px solid ${theme.palette.primary.light}`
                  : `2px solid #222`,
                borderRadius: 0.5,
                transition:
                  "background 0.2s, color 0.2s, font-size 0.3s cubic-bezier(.4,2,.6,1)",
                userSelect: "none",
                outline: "none",
                zIndex:
                  focusedCell &&
                  focusedCell.row === rowIdx &&
                  focusedCell.col === colIdx
                    ? 2
                    : 1,
                boxShadow:
                  focusedCell &&
                  focusedCell.row === rowIdx &&
                  focusedCell.col === colIdx
                    ? `0 0 0 3px #fff inset`
                    : isInitial
                    ? `0 2px 0 ${theme.palette.primary.light}, 0 4px 0 #000`
                    : `0 2px 0 #222`,
                "&:hover": {
                  background:
                    focusedCell &&
                    focusedCell.row === rowIdx &&
                    focusedCell.col === colIdx
                      ? theme.palette.action.selected
                      : isInitial
                      ? `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`
                      : `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                  boxShadow:
                    focusedCell &&
                    focusedCell.row === rowIdx &&
                    focusedCell.col === colIdx
                      ? `0 0 0 3px #fff inset`
                      : null,
                },
              }}
            >
              {value || ""}
            </Button>
          );
        })
      )}
    </Box>
  );
};

export default SudokuGrid;
