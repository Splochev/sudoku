import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useTheme } from "@mui/material/styles";

export interface ButtonGroupProps {
  value: number | string;
  buttonLabels: { id: number | string; label: string }[];
  onChange: (value: number | string) => void;
}

const CoreButtonGroup = ({
  value,
  buttonLabels,
  onChange,
}: ButtonGroupProps) => {
  const theme = useTheme();
  return (
    <ButtonGroup
      variant="contained"
      sx={{
        boxShadow: `0 4px 0 ${theme.palette.primary.main}, 0 8px 0 #000`,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      {buttonLabels.map((item) => {
        const selected = value === item.id;
        return (
          <Button
            key={item.id}
            onClick={() => onChange(item.id)}
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
              borderRadius: 0,
              transition: "background 0.2s, color 0.2s",
              zIndex: selected ? 1 : undefined,
              filter: selected ? "brightness(1.2)" : undefined,
              boxShadow: selected
                ? `0 1px 0 ${theme.palette.secondary.dark}, 0 2px 0 #000`
                : `0 2px 0 ${theme.palette.secondary.main}`,
              transform: selected ? "translateY(2px)" : undefined,
              "&:hover": {
                background: `linear-gradient(180deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                color: theme.palette.background.default,
                boxShadow: `0 2px 0 ${theme.palette.primary.main}`,
              },
            }}
          >
            {item.label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default CoreButtonGroup;
