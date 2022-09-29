import { Box, Tabs, Tab } from "@mui/material";
import { useState, SyntheticEvent } from "react";
import { defaultSectionPadding } from "../../constants/defaultSectionPadding";
import { useFetch } from "../../hooks/useFetch";
import { MainText } from "../common/MainText";
import { Section } from "../common/Section";

export const ProjectsSection = () => {
  const { data, fetching } = useFetch<any>("/projetos", {
    params: {
      populate: [
        "cards",
        "cards.icone",
        "projetos",
        "projetos.thumb",
        "projetos.telaCheia",
        "projetos.categoria",
      ],
    },
  });
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const categories = data?.projetos?.map((project: any) => {
    return project.categoria.data.attributes.nome;
  });

  console.log(categories);

  return (
    <Section id="projetos">
      <MainText title={data?.h2} text={data?.textoPrincipal} align="center" />

      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor="secondary"
          textColor="primary"
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              color: "primary.main",
              fontWeight: 400,

              "&.Mui-selected": {
                fontWeight: 600,
              },
            },
          }}
        >
          <Tab label="Todos" />
          {categories?.map((categorie: any, index: number) => {
            return <Tab key={index} label={categorie} />;
          })}
        </Tabs>
      </Box>
    </Section>
  );
};
