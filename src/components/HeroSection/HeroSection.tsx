import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { scrollTo } from "../../helpers/scrollTo";
import { Button } from "../common/Button";
import { RedCircle } from "./RedCircle";

export interface IHeroData {
  h1: string;
  backgroundImageUrl: string;
  buttonText: string;
}

interface IHeroSectionProps {
  heroData: IHeroData;
}

const sxOverlay = {
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  backgroundColor: "primary.main",
  position: "absolute",
  zIndex: 100,
};

const sxOverlayMultiply = {
  ...sxOverlay,
  opacity: 0.6,
  mixBlendMode: "multiply",
};

const sxOverlayColor = {
  ...sxOverlay,
  mixBlendMode: "color",
};

export const HeroSection = ({
  heroData: { h1, backgroundImageUrl, buttonText },
}: IHeroSectionProps) => {
  const h1Array = h1.split("\n");

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
      id="hero"
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <RedCircle />
      </Box>
      <Box sx={sxOverlayMultiply} />
      <Box sx={sxOverlayColor} />

      <Container
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          position: "relative",
          justifyContent: "flex-end",
          py: 10,
          zIndex: 300,
        }}
      >
        <Stack
          alignItems="center"
          spacing={4}
          sx={{ width: "100%", position: "relative", zIndex: 400 }}
        >
          <Stack
            alignItems="center"
            sx={{
              my: "auto",
              width: "100%",
              color: "white.main",
            }}
          >
            <Typography variant="h1">{h1Array[0]}</Typography>
            <Typography
              variant="h1"
              sx={{ transform: { XS: "none", md: "translateX(-10%)" } }}
            >
              {h1Array[1]}
            </Typography>
            <Typography
              variant="h1"
              sx={{ transform: { XS: "none", md: "translateX(25%)" } }}
            >
              {h1Array[2]}
            </Typography>
          </Stack>
          <Button
            color="white"
            variant="contained"
            onClick={() => scrollTo("sobre")}
          >
            {buttonText}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
