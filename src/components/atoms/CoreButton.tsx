import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

export interface CoreButtonProps {
  selected?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  sx?: object;
  disabled?: boolean;
}

const CoreButton = ({
  selected = false,
  children,
  onClick,
  style,
  sx = {},
  disabled = false,
}: CoreButtonProps) => {
  const theme = useTheme();
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      sx={{
        border: "none !important",
        fontFamily: theme.typography.fontFamily,
        fontSize: { xs: "0.6rem", sm: "0.75rem" },
        letterSpacing: "1px",
        px: { xs: 1, sm: 2 },
        py: { xs: 0.5, sm: 1 },
        color: selected
          ? theme.palette.background.default
          : theme.palette.primary.contrastText,
        background: selected
          ? `linear-gradient(180deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`
          : `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        borderRadius: 2,
        transition: "background 0.2s, color 0.2s",
        zIndex: selected ? 1 : undefined,
        filter: selected ? "brightness(1.2)" : undefined,
        boxShadow: `0 4px 0 ${theme.palette.primary.main}, 0 8px 0 #000`,
        transform: selected ? "translateY(2px)" : undefined,
        textShadow: "0 2px 4px #000",
        "&:hover": {
          background: `linear-gradient(180deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
          color: theme.palette.background.default,
          boxShadow: `0 2px 0 ${theme.palette.primary.main}`,
        },
        '@media (max-width:420px)': {
          fontSize: '0.5rem',
          px: 0.7,
          py: 0.3,
        },
        '@media (max-width:400px)': {
          fontSize: '0.47rem',
          px: 0.6,
          py: 0.25,
        },
        ...sx,
      }}
      style={style}
    >
      {children}
    </Button>
  );
};

export default CoreButton;
