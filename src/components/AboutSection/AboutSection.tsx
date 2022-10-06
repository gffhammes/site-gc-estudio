import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { defaultSectionPadding } from "../../constants/defaultSectionPadding";
import { useFetch } from "../../hooks/useFetch";
import { IMainTextProps, MainText } from "../common/MainText";
import { Section } from "../common/Section";
import { Photo } from "./Photo";
import { TextWithIcon } from "./TextWithIcon";

export const AboutSection = () => {
  const { data, fetching } = useFetch<any>("/sobre", {
    params: {
      populate: ["imagem", "textoComIcone", "textoComIcone.icone"],
    },
  });

  return (
    <Section id="sobre">
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        spacing={5}
        justifyContent="space-between"
      >
        <Stack
          alignItems="flex-start"
          spacing={5}
          sx={{ flexBasis: "61ch", maxWidth: "61ch" }}
        >
          <MainText
            title={data?.h2}
            text={data?.textoPrincipal}
            dashPosition="top"
          />
          {data?.textoComIcone.map((item: any) => {
            return (
              <TextWithIcon
                key={item.id}
                data={{
                  icon: item.icone.data.attributes.url,
                  title: item.titulo,
                  text: item.texto,
                }}
              />
            );
          })}
        </Stack>
        <Photo image={data?.imagem.data.attributes.url} />
      </Stack>
    </Section>
  );
};
