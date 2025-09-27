import CoreButton from "../atoms/CoreButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { resetGame } from "../../stores/boardSlice";
import React from "react";

interface PlayGameActionsProps {
  onSolve: () => void;
  onValidate: () => void;
  solvingLoading?: boolean;
  validatingLoading?: boolean;
  disableAll?: boolean;
}

const PlayGameActions = React.forwardRef<HTMLDivElement, PlayGameActionsProps>(
  (
    { onSolve, onValidate, solvingLoading, validatingLoading, disableAll },
    ref
  ) => {
    const dispatch = useDispatch();
    const internalOnNewGame = () => {
      dispatch(resetGame());
    };

    return (
      <Grid ref={ref} container spacing={2} justifyContent="center">
        <CoreButton
          style={{ marginTop: 32 }}
          onClick={onValidate}
          disabled={disableAll || solvingLoading || validatingLoading}
          loading={validatingLoading}
        >
          <TaskAltIcon sx={{ mr: 1, verticalAlign: "middle" }} />
          Validate
        </CoreButton>
        <CoreButton
          style={{ marginTop: 32 }}
          onClick={onSolve}
          disabled={disableAll || solvingLoading || validatingLoading}
          loading={solvingLoading}
        >
          <AutoFixHighIcon sx={{ mr: 1, verticalAlign: "middle" }} />
          Solve
        </CoreButton>
        <CoreButton
          style={{ marginTop: 32 }}
          onClick={internalOnNewGame}
          disabled={solvingLoading || validatingLoading}
        >
          <RestartAltIcon sx={{ mr: 1, verticalAlign: "middle" }} />
          New Game
        </CoreButton>
      </Grid>
    );
  }
);

export default PlayGameActions;
