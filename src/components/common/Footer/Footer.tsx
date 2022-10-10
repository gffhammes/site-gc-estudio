import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Button } from "../Button";
import { Logo } from "../Logo";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useFetch } from "../../../hooks/useFetch";
import { getFormattedPhone } from "../../../helpers/getFormattedPhone";
import { Background } from "./Background";

export const Footer = () => {
  const { data } = useFetch<any>("/dados-empresa");

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
            <Logo size="lg" />
            <Stack spacing={3}>
              <Typography fontSize={20} fontWeight={600}>
                Entre em contato
              </Typography>

              <Stack spacing={2}>
                <a
                  href={`tel:${data?.whatsapp}`}
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
                      {getFormattedPhone(data?.whatsapp || "")}
                    </Typography>
                  </Stack>
                </a>

                <a href={`mailto:	${data?.email}`}>
                  <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                    sx={{ color: "rgba(255,255,255,.4)" }}
                  >
                    <MailOutlineIcon />
                    <Typography>{data?.email}</Typography>
                  </Stack>
                </a>
              </Stack>
            </Stack>
            <Stack spacing={3}>
              <Typography fontSize={20} fontWeight={600}>
                Quer evoluir sua marca?{" "}
              </Typography>
              <Button color="secondary" variant="contained">
                Iniciar um projeto
              </Button>
            </Stack>
          </Stack>
        </Container>

        <Background />
      </Box>
      <Box sx={{ py: 2, backgroundColor: "#192B51" }}>
        <Container>
          <Typography textAlign="center" color="white.main">
            © 2022 GC Estúdio. Todos os Direitos Reservados.
          </Typography>
        </Container>
      </Box>
    </>
  );
};
