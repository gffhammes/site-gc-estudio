import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Button } from "../common/Button";
import { MainText } from "../common/MainText";
import { Section } from "../common/Section";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const ContactSection = () => {
  const { data, fetching } = useFetch<any>("/contato", {
    params: {
      populate: ["foto"],
    },
  });

  return (
    <Section
      id="contato"
      backgroundColor="secondary.main"
      sx={{ position: "relative" }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={10}
        alignItems="center"
        justifyContent="space-between"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Box
          sx={{
            flexBasis: "50%",
          }}
        >
          <MainText
            title={data?.h2}
            color="white.main"
            dashPosition="top"
            marginBottom
          />

          <Stack spacing={4}>
            <Typography color="#fff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              mauris quam, dapibus et iaculis ac, aliquet ac erat.
            </Typography>

            <Button
              color="primary"
              variant="contained"
              startIcon={<WhatsAppIcon />}
            >
              Fale conosco
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: { xs: "27rem", md: "unset" },
            aspectRatio: "1.2 / 1",
            flexBasis: "50%",
          }}
        >
          <Image
            src={data?.foto.data.attributes.url || "/"}
            alt="GC Estúdio"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Stack>

      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          backgroundImage: "url('/images/Mapa.png')",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />
    </Section>
  );
};
