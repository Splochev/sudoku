import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import theme from "../../theme";
import PlayGameActions from "../organisms/PlayGameActions";
import type { RootState } from "../../types/board.types";
import DifficultyDisplay from "../atoms/DifficultyDisplay";
import { Grid } from "@mui/material";

const PlayGame = () => {
  const difficulty = useSelector((state: RootState) => state.board.difficulty);
  const initialBoard = useSelector((state: RootState) => state.board.initialBoard);
  const solution = useSelector((state: RootState) => state.board.solution);

  const onSolve = async () => {};
  const onValidate = async () => {};

  return (
    <Box
      sx={{
        width: { xs: "95vw", sm: "80vw", md: "60vw", lg: "40vw" },
        maxWidth: 600,
        bgcolor: theme.palette.background.paper,
        borderRadius: 4,
        boxShadow: 3,
        p: { xs: 2, sm: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container justifyContent="center" alignItems="start" gap={2}>
        <Typography variant="h3" color="primary" gutterBottom fontWeight={700}>
          Sudoku
        </Typography>
        <DifficultyDisplay difficulty={difficulty} />
      </Grid>
      <PlayGameActions onSolve={onSolve} onValidate={onValidate} />
    </Box>
  );
};

export default PlayGame;
