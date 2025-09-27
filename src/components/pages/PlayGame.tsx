import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import theme from "../../theme";
import PlayGameActions from "../organisms/PlayGameActions";
import type { BoardNumber, RootState } from "../../types/board.types";
import PlayGameHeader from "../organisms/PlayGameHeader";
import { useRef, useState, useLayoutEffect } from "react";
import CoreButtonGroup from "../atoms/CoreButtonGroup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Typography } from "@mui/material";
import SudokuGrid from "../organisms/SudokuGrid";

const NUMBER_OPTIONS = [
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
  { id: 4, label: "4" },
  { id: 5, label: "5" },
  { id: 6, label: "6" },
  { id: 7, label: "7" },
  { id: 8, label: "8" },
  { id: 9, label: "9" },
  { id: "clear", label: <Typography sx={{ fontSize: "1rem", userSelect: "none" }}>X</Typography> },
];

const PlayGame = () => {
  const isMdDown = useMediaQuery("(max-width:480px)");
  const playGameActionsRef = useRef<HTMLDivElement>(null);
  const difficulty = useSelector((state: RootState) => state.board.difficulty);
  const [actionsWidth, setActionsWidth] = useState<number | undefined>(
    undefined
  );
  const [numberToFill, setNumberToFill] = useState<BoardNumber>({
    row: -1,
    col: -1,
    value: -1,
  });

  const onSolve = async () => {};
  const onValidate = async () => {};

  const solution = useSelector((state: RootState) => state.board.solution);
  const onChange = (value: string | number) => {
    if (value === "clear") {
      // If a cell is selected and has a value, clear it
      if (numberToFill.row > -1 && numberToFill.col > -1) {
        const currentValue = solution?.[numberToFill.row]?.[numberToFill.col];
        if (currentValue) {
          setNumberToFill({ ...numberToFill, value: 0 }); // 0 means clear
        } else {
          setNumberToFill({ row: -1, col: -1, value: -1 });
        }
      } else {
        setNumberToFill({ row: -1, col: -1, value: -1 });
      }
      return;
    }
    setNumberToFill((prev) => ({ ...prev, value: Number(value) }));
  };

  useLayoutEffect(() => {
    if (playGameActionsRef.current) {
      setActionsWidth(playGameActionsRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (playGameActionsRef.current) {
        setActionsWidth(playGameActionsRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const disabled = numberToFill.col === -1 || numberToFill.row === -1;
  const numberOptions = isMdDown
    ? [NUMBER_OPTIONS.slice(0, 5), NUMBER_OPTIONS.slice(5)]
    : [NUMBER_OPTIONS];

  return (
    <Box
      sx={{
        maxWidth: "650px",
        "@media (max-width:700px)": {
          width: "100vw !important",
          minWidth: "100vw !important",
          borderRadius: 0,
        },
        bgcolor: theme.palette.background.paper,
        borderRadius: 4,
        boxShadow: 3,
        p: { xs: 2, sm: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PlayGameHeader difficulty={difficulty} />
      <SudokuGrid
        numberToFill={numberToFill}
        setNumberToFill={setNumberToFill}
        actionsWidth={actionsWidth}
      />
      <Grid
        container
        sx={{
          gap: 2,
          flexDirection: isMdDown ? "column" : "row",
        }}
        style={actionsWidth ? { width: actionsWidth } : {}}
      >
        {numberOptions.map((options, index) => (
          <CoreButtonGroup
            key={index}
            disabled={disabled}
            buttonLabels={options}
            onChange={onChange}
            value={numberToFill.value}
          />
        ))}
      </Grid>
      <PlayGameActions
        onSolve={onSolve}
        onValidate={onValidate}
        ref={playGameActionsRef}
      />
    </Box>
  );
};

export default PlayGame;
