import { Grid, Stack } from "@mui/material";
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { MainText } from "../common/MainText";
import { Section } from "../common/Section";
import { Background } from "./Background";
import { ServiceCard } from "./ServiceCard";

export const ServicesSection = () => {
  const { data, fetching } = useFetch<any>("/servicos", {
    params: {
      populate: ["cards", "cards.icone"],
    },
  });

  return (
    <Section
      id="servicos"
      backgroundColor="#f4f4f4"
      sx={{ position: "relative" }}
    >
      <Stack sx={{ position: "relative", zIndex: 1 }}>
        <MainText
          title={data?.h2}
          text={data?.textoPrincipal}
          align="center"
          marginBottom
        />
        <Grid container spacing={2}>
          {data?.cards.map((card: any) => {
            return (
              <Grid key={card.id} item xs={12} sm={6} md={4}>
                <ServiceCard
                  data={{
                    icon: card.icone.data.attributes.url,
                    title: card.titulo,
                    text: card.texto,
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Stack>

      <Background />
    </Section>
  );
};
