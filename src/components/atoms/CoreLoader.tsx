/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

const ARCADE_COLORS = ["#8A00C4", "#00FFFF", "#39FF14", "#FF073A", "#FF5C00"];

import type { SxProps, Theme } from "@mui/material/styles";

export interface CoreLoaderProps {
  variant?: "horizontal" | "circular";
  size?: number;
  sx?: SxProps<Theme>;
}

export default function CoreLoader({
  variant = "horizontal",
  size = 36,
  sx,
}: CoreLoaderProps) {
  const theme = useTheme();
  if (variant === "circular") {
    // Allow sx.width/height to override size
    const sxWidth =
      sx && typeof sx === "object" && "width" in sx
        ? (sx as any).width
        : undefined;
    const sxHeight =
      sx && typeof sx === "object" && "height" in sx
        ? (sx as any).height
        : undefined;
    const finalSize = sxWidth || sxHeight || size;
    return (
      <Box
        sx={{
          display: "inline-block",
          position: "relative",
          width: finalSize,
          height: finalSize,
          minWidth: finalSize,
          minHeight: finalSize,
          maxWidth: finalSize,
          maxHeight: finalSize,
          ...sx,
        }}
      >
        {ARCADE_COLORS.map((color, i) => (
          <Box
            key={color}
            data-testid="arcade-loader-dot"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: finalSize,
              height: finalSize,
              borderRadius: "50%",
              border: `${finalSize * 0.13}px solid transparent`,
              borderTop: `${finalSize * 0.13}px solid ${color}`,
              boxSizing: "border-box",
              animation: `arcade-spin 1.2s cubic-bezier(.68,-0.55,.27,1.55) infinite`,
              animationDelay: `${i * 0.12}s`,
            }}
          />
        ))}
        <style>{`
          @keyframes arcade-spin {
            0% { transform: rotate(0deg); filter: brightness(1.2); }
            80% { filter: brightness(1.5); }
            100% { transform: rotate(360deg); filter: brightness(1.2); }
          }
        `}</style>
      </Box>
    );
  }
  // Horizontal (default) loader
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: 2,
        ...sx,
      }}
    >
      {ARCADE_COLORS.map((color, i) => (
        <Box
          key={color}
          data-testid="arcade-loader-dot"
          sx={{
            width: 18,
            height: 18,
            borderRadius: 2,
            background: `linear-gradient(180deg, ${color} 60%, ${theme.palette.background.paper} 100%)`,
            boxShadow: `0 2px 0 ${theme.palette.primary.main}, 0 4px 0 #000`,
            animation: `arcade-bounce 1s ${
              i * 0.12
            }s infinite cubic-bezier(.68,-0.55,.27,1.55)`,
            border: `2px solid ${theme.palette.secondary.main}`,
            display: "inline-block",
          }}
        />
      ))}
      <style>{`
        @keyframes arcade-bounce {
          0%, 100% { transform: translateY(0); filter: brightness(1.2); }
          50% { transform: translateY(-18px) scaleY(1.2); filter: brightness(1.5); }
        }
      `}</style>
    </Box>
  );
}
