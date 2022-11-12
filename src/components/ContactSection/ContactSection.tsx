import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Button } from "../common/Button";
import { MainText } from "../common/MainText";
import { Section } from "../common/Section";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { MapBackground } from "./MapBackground";

export const ContactSection = () => {
  const { data, fetching } = useFetch<any>("/contato", {
    params: {
      populate: ["foto"],
    },
  });

  if (!data) return null;

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
          <MainText title={data?.h2} color="white.main" marginBottom />

          <Stack spacing={4}>
            <Typography
              color="#fff"
              dangerouslySetInnerHTML={{ __html: data?.texto }}
            />

            <a
              href={data?.linkBotao}
              target="_blank"
              rel="noreferrer"
              style={{ width: "fit-content" }}
            >
              <Button
                color="primary"
                variant="contained"
                startIcon={<WhatsAppIcon />}
              >
                {data?.textoBotao}
              </Button>
            </a>
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

      <MapBackground />
    </Section>
  );
};
