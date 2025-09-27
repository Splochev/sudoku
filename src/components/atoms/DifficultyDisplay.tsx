import Box from "@mui/material/Box";
import theme from "../../theme";
import type { Difficulty } from "../../types/board.types";

interface DifficultyDisplayProps {
  difficulty: Difficulty;
}

const DifficultyDisplay = ({ difficulty }: DifficultyDisplayProps) => {
  return (
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
  );
};

export default DifficultyDisplay;
