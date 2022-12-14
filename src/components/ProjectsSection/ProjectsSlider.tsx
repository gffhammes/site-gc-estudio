import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Slide } from "./Slide";
import { Arrows } from "./Arrows";
import { FullscreenPhoto } from "./FullscreenPhoto";

interface IProjectsSliderProps {
  slides: any[];
}

export const ProjectsSlider = ({ slides }: IProjectsSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    draggable: false,
  });
  const [fullscreenIndex, setFullscreenIndex] = useState<number>(0);
  const [openFullscreen, setOpenFullscreen] = useState<boolean>(false);

  const handleOpenFullscreen = (index: number) => {
    setOpenFullscreen(true);
    setFullscreenIndex(index);
  };

  const handleCloseFullscreen = () => {
    setOpenFullscreen(false);
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi, slides]);

  if (slides?.length <= 1) {
    return (
      <>
        <Box sx={sxEmbla}>
          <Box sx={sxEmblaContainer}>
            <Box
              sx={{ ...sxEmblaSlide, mx: "auto !important" }}
              onClick={() => handleOpenFullscreen(0)}
            >
              <Slide slide={slides[0]} />
            </Box>
          </Box>
        </Box>

        <FullscreenPhoto
          open={openFullscreen}
          handleClose={handleCloseFullscreen}
          projectName={slides[fullscreenIndex]?.nome}
          photoSrc={slides[fullscreenIndex]?.telaCheia.data.attributes.url}
        />
      </>
    );
  }

  return (
    <>
      <Box sx={sxEmbla} ref={emblaRef}>
        <Box sx={sxEmblaContainer}>
          {slides?.map((slide, index) => {
            return (
              <Box
                key={index}
                sx={sxEmblaSlide}
                onClick={() => handleOpenFullscreen(index)}
              >
                <Slide slide={slide} />
              </Box>
            );
          })}
        </Box>

        <Arrows scrollNext={scrollNext} scrollPrev={scrollPrev} />
      </Box>

      <FullscreenPhoto
        open={openFullscreen}
        handleClose={handleCloseFullscreen}
        projectName={slides[fullscreenIndex]?.nome}
        photoSrc={slides[fullscreenIndex]?.telaCheia.data.attributes.url}
      />
    </>
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
  flex: { xs: "0 0 70%", md: "0 0 33%" },
  mr: { xs: 2, sm: 4 },
  cursor: "pointer",
};
