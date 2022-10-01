import { Stack } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface IArrowsProps {
  scrollPrev: () => void;
  scrollNext: () => void;
}

export const Arrows = ({ scrollNext, scrollPrev }: IArrowsProps) => {
  const leftArrowProps = {
    ...arrowProps,
    onClick: scrollPrev,
  };

  const rigthArrowProps = {
    ...arrowProps,
    onClick: scrollNext,
  };

  return (
    <>
      <Stack {...leftArrowContainerProps}>
        <ArrowBackIosIcon {...leftArrowProps} />
      </Stack>

      <Stack {...rigthArrowContainerProps}>
        <ArrowForwardIosIcon {...rigthArrowProps} />
      </Stack>
    </>
  );
};

const arrowContainerProps = {
  position: "absolute" as "absolute",
  top: 0,
  alignItems: "center",
  justifyContent: "center",
  sx: {
    height: "100%",
    width: "10rem",
  },
};

const leftArrowContainerProps = {
  ...arrowContainerProps,
  sx: {
    ...arrowContainerProps.sx,
    left: 0,
    background:
      "linear-gradient(90deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0))",
  },
};

const rigthArrowContainerProps = {
  ...arrowContainerProps,
  sx: {
    ...arrowContainerProps.sx,
    right: 0,
    background:
      "linear-gradient(270deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0))",
  },
};

const arrowProps = {
  color: "secondary" as "secondary",
  fontSize: "large" as "large",
  sx: { cursor: "pointer" },
};
