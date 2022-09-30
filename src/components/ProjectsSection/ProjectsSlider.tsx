import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { Slide } from "./Slide";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface IProjectsSliderProps {
  slides: any[];
}

export const ProjectsSlider = ({ slides }: IProjectsSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    // containScroll: "trimSnaps",
  });

  console.log(slides);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi, slides]);

  return (
    <Box sx={sxEmbla} ref={emblaRef}>
      <Box sx={sxEmblaContainer}>
        {slides?.map((slide, index) => {
          return (
            <Box key={index} sx={sxEmblaSlide}>
              <Slide slide={slide} />
            </Box>
          );
        })}
      </Box>

      <Stack
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        direction="row"
        justifyContent="space-between"
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            height: "100%",
            width: "20rem",
            background:
              "linear-gradient(90deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0))",
          }}
        >
          <ArrowBackIosIcon
            onClick={scrollPrev}
            color="secondary"
            fontSize="large"
            sx={{ cursor: "pointer" }}
          />
        </Stack>

        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            height: "100%",
            width: "10rem",
            background:
              "linear-gradient(270deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0))",
          }}
        >
          <ArrowForwardIosIcon
            onClick={scrollNext}
            color="secondary"
            fontSize="large"
            sx={{ cursor: "pointer" }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

const sxEmbla = {
  overflow: "hidden",
  position: "relative",
};

const sxEmblaContainer = {
  display: "flex",
};

const sxEmblaSlide = {
  flex: "0 0 33%",
  mr: 4,
};
