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
    <Grid container justifyContent="center" alignItems="center" gap={2}>
      <Typography
        variant="h3"
        color="primary"
        gutterBottom
        fontWeight={700}
        sx={{
          fontSize: {
            xs: '2.4rem',
            sm: '2.9rem',
            md: '3.4rem',
          },
          '@media (max-width:420px)': {
            fontSize: '2.1rem',
          },
          '@media (max-width:410px)': {
            fontSize: '1.95rem',
          },
          '@media (max-width:400px)': {
            fontSize: '1.8rem',
          },
          '@media (max-width:390px)': {
            fontSize: '1.65rem',
          },
          '@media (max-width:380px)': {
            fontSize: '1.5rem',
          },
          '@media (max-width:375px)': {
            fontSize: '1.4rem',
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
          py: 1.2,
          borderRadius: 2,
          background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
          boxShadow: `0 2px 0 ${theme.palette.primary.main}, 0 4px 0 #000`,
          border: `2px solid ${theme.palette.secondary.main}`,
          fontFamily: theme.typography.fontFamily,
          fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.7rem" },
          color: theme.palette.background.default,
          letterSpacing: 2,
          textTransform: "uppercase",
          textShadow: "0 2px 4px #000",
          animation: "arcade-difficulty-flicker 1.2s infinite alternate",
          userSelect: "none",
          '@media (max-width:420px)': {
            fontSize: '1.1rem',
            px: 2.6,
            py: 1,
          },
          '@media (max-width:410px)': {
            fontSize: '1.02rem',
            px: 2.3,
            py: 0.9,
          },
          '@media (max-width:400px)': {
            fontSize: '0.95rem',
            px: 2,
            py: 0.8,
          },
          '@media (max-width:390px)': {
            fontSize: '0.88rem',
            px: 1.7,
            py: 0.7,
          },
          '@media (max-width:380px)': {
            fontSize: '0.8rem',
            px: 1.4,
            py: 0.6,
          },
          '@media (max-width:375px)': {
            fontSize: '0.75rem',
            px: 1.2,
            py: 0.5,
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
