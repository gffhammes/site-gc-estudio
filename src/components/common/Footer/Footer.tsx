import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Button } from "../Button";
import { Logo } from "../Logo";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useFetch } from "../../../hooks/useFetch";
import { getFormattedPhone } from "../../../helpers/getFormattedPhone";
import { Background } from "./Background";
import { Copyright } from "./Copyright";
import Image from "next/image";

export const Footer = () => {
  const { data: contactData } = useFetch<any>("/dados-empresa");
  const { data: footerData } = useFetch<any>("/rodape", {
    params: {
      populate: ["links", "links.icone"],
    },
  });

  if (!footerData) return null;

  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "primary.main",
          py: 15,
          position: "relative",
        }}
      >
        <Container
          sx={{
            maxWidth: { xs: "27rem", md: "1200px" },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            spacing={8}
            sx={{ color: "white.main" }}
          >
            <Box sx={{ width: "fit-content" }}>
              <Logo size="lg" />

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ mt: 4 }}
              >
                {footerData?.links?.map((link: any) => (
                  <Box
                    key={link.titulo}
                    component="a"
                    href={link.link}
                    target="_blank"
                    sx={{
                      position: "relative",
                      height: "1rem",
                      width: "1.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      src={link.icone?.data.attributes.url}
                      alt={link.titulo}
                      layout="fill"
                    />
                  </Box>
                ))}
              </Stack>
            </Box>

            <Stack spacing={3}>
              <Typography fontSize={20} fontWeight={600}>
                Entre em contato
              </Typography>

              <Stack spacing={2}>
                <a
                  href={`tel:${contactData?.whatsapp}`}
                  style={{ width: "fit-content" }}
                >
                  <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                    sx={{ color: "rgba(255,255,255,.4)" }}
                  >
                    <PhoneEnabledOutlinedIcon />
                    <Typography>
                      {getFormattedPhone(contactData?.whatsapp || "")}
                    </Typography>
                  </Stack>
                </a>

                <a href={`mailto:	${contactData?.email}`}>
                  <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                    sx={{ color: "rgba(255,255,255,.4)" }}
                  >
                    <MailOutlineIcon />
                    <Typography>{contactData?.email}</Typography>
                  </Stack>
                </a>
              </Stack>
            </Stack>
            <Stack spacing={3}>
              <Typography fontSize={20} fontWeight={600}>
                {footerData.tituloBotao}
              </Typography>
              <a href={footerData.linkBotao} target="_blank" rel="noreferrer">
                <Button color="secondary" variant="contained">
                  {footerData.textoBotao}
                </Button>
              </a>
            </Stack>
          </Stack>
        </Container>

        <Background />
      </Box>
      <Copyright />
    </>
  );
};
