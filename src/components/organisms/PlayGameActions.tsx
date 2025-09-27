import CoreButton from "../atoms/CoreButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { resetGame } from "../../stores/boardSlice";

interface PlayGameActionsProps {
  onSolve: () => void;
  onValidate: () => void;
  onNewGame?: () => void;
}

const PlayGameActions = ({ onSolve, onValidate, onNewGame }: PlayGameActionsProps) => {
  const dispatch = useDispatch();
  const internalOnNewGame = () => {
    if (onNewGame) {
      onNewGame();
    } else {
      dispatch(resetGame());
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
      <CoreButton style={{ marginTop: 32 }} onClick={onValidate}>
        <TaskAltIcon sx={{ mr: 1, verticalAlign: "middle" }} />
        Validate
      </CoreButton>
      <CoreButton style={{ marginTop: 32 }} onClick={onSolve}>
        <AutoFixHighIcon sx={{ mr: 1, verticalAlign: "middle" }} />
        Solve
      </CoreButton>
      <CoreButton style={{ marginTop: 32 }} onClick={internalOnNewGame}>
        <RestartAltIcon sx={{ mr: 1, verticalAlign: "middle" }} />
        New Game
      </CoreButton>
    </Grid>
  );
};

export default PlayGameActions;
