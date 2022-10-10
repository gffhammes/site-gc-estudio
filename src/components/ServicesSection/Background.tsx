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
        backgroundImage: "url('/images/bg_01.png')",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }}
    />
  );
};
