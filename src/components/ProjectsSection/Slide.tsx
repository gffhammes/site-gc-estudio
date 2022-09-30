import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface ISlideProps {
  slide: any;
}

export const Slide = ({ slide }: ISlideProps) => {
  return (
    <Stack spacing={2}>
      <Box
        sx={{
          width: "100%",
          paddingTop: "78%",
          backgroundImage: `url(${slide.thumb.data.attributes.url})`,
          backgroundSize: "cover",
        }}
      />

      <Typography
        textAlign="center"
        fontSize={20}
        fontWeight={600}
        color="primary"
      >
        {slide.nome}
      </Typography>
    </Stack>
  );
};
