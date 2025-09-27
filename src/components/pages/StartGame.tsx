import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CoreButtonGroup from "../atoms/CoreButtonGroup";
import CoreButton from "../atoms/CoreButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setInitialBoard,
  setSolution,
  setDifficulty as setDifficultyAction,
} from "../../stores/boardSlice";
import { DIFFICULTIES } from "../../constants";
import theme from "../../theme";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { getSudokuBoard } from "../../services/sudoku.service";
import { toast } from "react-toastify";
import { Grid } from "@mui/material";

const StartGame = () => {
  const [difficulty, setDifficulty] = useState<string>(DIFFICULTIES[0].id);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onStartGame = async () => {
    try {
      setLoading(true);
      const difficultyLevel = DIFFICULTIES.find(
        (d) => d.id === difficulty
      )?.label;

      if (!difficultyLevel) {
        toast.error("Invalid difficulty level");
      } else {
        const response = await getSudokuBoard(difficultyLevel);
        dispatch(setInitialBoard(response.data.board));
        dispatch(setSolution(response.data.board));
        dispatch(setDifficultyAction(response.difficulty));
      }
    } catch (error) {
      console.error("Error fetching Sudoku board:", error);
      toast.error("Failed to start game. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        bgcolor: theme.palette.background.paper,
        borderRadius: 4,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        "@media (max-width:700px)": {
          width: "100vw !important",
          minWidth: "100vw !important",
          height: "100vh !important",
          minHeight: "100vh !important",
          overflow: "hidden",
          borderRadius: 0,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Typography variant="h3" color="primary" gutterBottom fontWeight={700}>
        Sudoku
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        marginBottom={6}
      >
        Welcome! Choose your game difficulty and start playing
      </Typography>
      <Grid
        sx={{
          width: "100%",
          "@media (max-width:700px)": {
            width: "80%",
          },
        }}
      >
        <CoreButtonGroup
          buttonLabels={DIFFICULTIES}
          onChange={(value) => setDifficulty(String(value))}
          value={difficulty}
          disabled={loading}
        />
      </Grid>
      <CoreButton
        style={{ marginTop: 32 }}
        onClick={onStartGame}
        disabled={loading}
        loading={loading}
      >
        <PlayArrowIcon sx={{ mr: 1, verticalAlign: "middle" }} />
        Start Game
      </CoreButton>
    </Box>
  );
};

export default StartGame;
