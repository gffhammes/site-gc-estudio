import { Box } from "@mui/material";

export const Background = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        backgroundImage: "url('/images/bg_04.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "30% bottom",
        zIndex: 0,
      }}
    />
  );
};
