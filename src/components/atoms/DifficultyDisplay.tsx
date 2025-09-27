import Box from "@mui/material/Box";
import theme from "../../theme";
import type { Difficulty } from "../../types/board.types";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

interface PlayGameHeaderProps {
  difficulty: Difficulty;
}

const PlayGameHeader = ({ difficulty }: PlayGameHeaderProps) => {
  return (
    <Grid container justifyContent="center" alignItems="start" gap={2}>
      <Typography
        variant="h3"
        color="primary"
        gutterBottom
        fontWeight={700}
        sx={{
          "@media (max-width:700px)": {
            fontSize: "2.5rem",
          },
          "@media (max-width:480px)": {
            fontSize: "2.2rem",
          },
        }}
      >
        Sudoku
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          mt: 1,
          px: 3,
          py: 1,
          borderRadius: 2,
          background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
          boxShadow: `0 2px 0 ${theme.palette.primary.main}, 0 4px 0 #000`,
          border: `2px solid ${theme.palette.secondary.main}`,
          fontFamily: theme.typography.fontFamily,
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
          color: theme.palette.background.default,
          letterSpacing: 2,
          textTransform: "uppercase",
          textShadow: "0 2px 4px #000",
          animation: "arcade-difficulty-flicker 1.2s infinite alternate",
          userSelect: "none",
          "@media (max-width:700px)": {
            fontSize: "1rem",
            px: 2.2,
            py: 0.7,
          },
          "@media (max-width:480px)": {
            fontSize: "0.7rem",
            px: 2.2,
            py: 0.7,
          },
        }}
      >
        {difficulty}
        <style>{`
        @keyframes arcade-difficulty-flicker {
          0% { filter: brightness(1.2); }
          40% { filter: brightness(1.5); }
          100% { filter: brightness(1.1); }
        }
      `}</style>
      </Box>
    </Grid>
  );
};

export default PlayGameHeader;
