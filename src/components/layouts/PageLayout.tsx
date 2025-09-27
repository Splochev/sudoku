import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import CoreLoader from "../atoms/CoreLoader";
import type { RootState } from "../../types/board.types";

const StartGame = lazy(() => import("../pages/StartGame"));
const PlayGame = lazy(() => import("../pages/PlayGame"));

function PageLayout() {
  const theme = useTheme();

  const initialBoard = useSelector(
    (state: RootState) => state.board.initialBoard
  );
  const solution = useSelector((state: RootState) => state.board.solution);

  const hasBoard = initialBoard && initialBoard.length > 0;
  const hasSolution = solution && solution.length > 0;

  let redirect = null;
  if (hasBoard && hasSolution) {
    redirect = <Navigate to="/play-game" replace />;
  } else {
    redirect = <Navigate to="/start-game" replace />;
  }

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100vh",
        width: "100vw",
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
        boxShadow: "none",
        overflow: "hidden",
      }}
    >
      {redirect}
      <Routes>
        <Route
          path="/start-game"
          element={
            <Suspense
              fallback={
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: "100%" }}
                >
                  <CoreLoader />
                </Grid>
              }
            >
              <StartGame />
            </Suspense>
          }
        />
        <Route
          path="/play-game"
          element={
            <Suspense
              fallback={
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: "100%" }}
                >
                  <CoreLoader />
                </Grid>
              }
            >
              <PlayGame />
            </Suspense>
          }
        />
      </Routes>
    </Paper>
  );
}

export default PageLayout;
