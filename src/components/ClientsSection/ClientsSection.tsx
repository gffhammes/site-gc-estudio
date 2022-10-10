import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { MainText } from "../common/MainText";
import { Section } from "../common/Section";
import { Background } from "./Background";

export const ClientsSection = () => {
  const { data, fetching } = useFetch<any>("/clientes", {
    params: {
      populate: ["clientes", "clientes.logo"],
    },
  });

  return (
    <Section
      id="clientes"
      backgroundColor="#f4f4f4"
      sx={{ position: "relative" }}
    >
      <Stack sx={{ position: "relative", zIndex: 1 }}>
        <MainText title={data?.h2} text={data?.textoPrincipal} align="center" />
        <Box sx={{ mt: 5 }}>
          <Grid
            container
            columns={10}
            spacing={5}
            alignItems="center"
            justifyContent="center"
          >
            {data?.clientes.map((client: any, index: number) => (
              <Grid key={index} item xs={5} sm={3} md={2}>
                <Box
                  sx={{ position: "relative", height: "6rem", width: "100%" }}
                >
                  <Box
                    component={Image}
                    src={client.logo.data.attributes.url}
                    alt={client.nome}
                    layout="fill"
                    objectFit="contain"
                    sx={{
                      filter: "saturate(0)",
                      transition: ".2s ease all",
                      "&:hover": { filter: "saturate(1)" },
                    }}
                  />
                </Box>
              </Grid>
            ))}

            <Grid item xs={5} sm={3} md={2}>
              <Box>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    border: "1px solid",
                    borderColor: "secondary.main",
                    width: "8rem",
                    height: "8rem",
                    mx: "auto",
                    p: 2,
                  }}
                >
                  <Typography
                    color="secondary"
                    textAlign="center"
                    fontWeight={600}
                  >
                    Sua marca pode estar aqui
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>

      <Background />
    </Section>
  );
};
