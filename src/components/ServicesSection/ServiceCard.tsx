import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

interface IServiceCardProps {
  data: {
    icon: string;
    title: string;
    text: string;
  };
}

export const ServiceCard = ({
  data: { icon, title, text },
}: IServiceCardProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: "primary.main",
        padding: "2rem",
        height: "100%",
        transition: ".3s ease all",
        "&:hover": {
          backgroundColor: "secondary.main",
          "& .icon *": {
            fill: theme.palette.primary.main,
          },
        },
      })}
    >
      <Stack spacing={2} alignItems="center">
        <Box sx={{ position: "relative", height: "55px", width: "55px" }}>
          <Box
            component="svg"
            data-src={icon}
            width="100%"
            height="100%"
            className="icon"
            sx={{
              "& *": {
                transition: ".1s ease all",
              },
            }}
          />
        </Box>
        <Typography variant="h6" color="white.main" textAlign="center">
          {title}
        </Typography>
        <Typography
          fontWeight={300}
          color="rgba(255,255,255,.4)"
          textAlign="center"
        >
          {text}
        </Typography>
      </Stack>
    </Box>
  );
};
