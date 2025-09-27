import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

export interface CoreButtonProps {
  selected?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  sx?: object;
  disabled?: boolean;
  loading?: boolean;
}

import React from "react";
import CoreLoader from "./CoreLoader";

const CoreButton = ({
  selected = false,
  children,
  onClick,
  style,
  sx = {},
  disabled = false,
  loading = false,
}: CoreButtonProps) => {
  const theme = useTheme();
  return (
    <Button
      disabled={disabled || loading}
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
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          background: `linear-gradient(180deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
          color: theme.palette.background.default,
          boxShadow: `0 2px 0 ${theme.palette.primary.main}`,
        },
        "@media (max-width:420px)": {
          fontSize: "0.5rem",
          px: 0.7,
          py: 0.3,
        },
        "@media (max-width:400px)": {
          fontSize: "0.47rem",
          px: 0.6,
          py: 0.25,
        },
        ...sx,
      }}
      style={style}
    >
      <span style={{ opacity: loading ? 0.2 : 1 }}>{children}</span>
      {loading && (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
            background: "rgba(0,0,0,0.25)",
            borderRadius: 8,
          }}
        >
          <CoreLoader variant="horizontal" size={24} />
        </span>
      )}
    </Button>
  );
};

export default CoreButton;
