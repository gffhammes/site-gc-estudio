import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export interface IMainTextProps {
  title: string;
  text?: string;
  align?: "center" | "left";
  dashPosition?: "top" | "bottom";
  color?: "primary" | "white.main";
  marginBottom?: boolean;
  dashWidth?: "normal" | "large";
}

export const MainText = ({
  title,
  text,
  align = "left",
  dashPosition = "bottom",
  color = "primary",
  marginBottom = false,
  dashWidth = "normal",
}: IMainTextProps) => {
  const sxDashToUse = {
    height: ".4rem",
    width: dashWidth === "large" ? "6rem" : "3rem",
    backgroundColor: color === "primary" ? "secondary.main" : "primary.main",
    my: 1,
  };

  return (
    <Stack alignItems={align} sx={{ marginBottom: marginBottom ? 4 : 0 }}>
      {dashPosition === "top" && <Box sx={sxDashToUse} />}
      <Typography
        variant="h2"
        fontSize={52}
        fontWeight={600}
        color={color}
        textAlign={align}
      >
        {title}
      </Typography>
      {dashPosition === "bottom" && <Box sx={sxDashToUse} />}

      {text && (
        <Typography textAlign={align} color="rgb(37 52 93 / 60%)">
          {text}
        </Typography>
      )}
    </Stack>
  );
};
