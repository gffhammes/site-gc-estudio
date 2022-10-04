import { Box, Tabs, Tab } from "@mui/material";
import { useState, SyntheticEvent, useMemo } from "react";
import { defaultSectionPadding } from "../../constants/defaultSectionPadding";
import { useBreakpoints } from "../../hooks";
import { useFetch } from "../../hooks/useFetch";
import { MainText } from "../common/MainText";
import { Section } from "../common/Section";
import { ProjectsSlider } from "./ProjectsSlider";

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
  const { md } = useBreakpoints();
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const categories = data?.projetos?.map((project: any) => {
    return project.categoria.data.attributes.nome;
  });

  const allCategories = useMemo(
    () => ["Todos", ...(categories ?? [])],
    [categories]
  );

  const projectsToShow = useMemo(() => {
    if (value === 0) return data?.projetos;

    return data?.projetos.filter((project: any) => {
      return project.categoria.data.attributes.nome === allCategories[value];
    });
  }, [allCategories, data?.projetos, value]);

  return (
    <Section id="projetos">
      <MainText title={data?.h2} text={data?.textoPrincipal} align="center" />

      <Box sx={{ mt: 4 }}>
        {md && (
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
            {allCategories?.map((categorie: any, index: number) => {
              return <Tab key={index} label={categorie} />;
            })}
          </Tabs>
        )}

        {projectsToShow && (
          <Box sx={{ mt: 8 }}>
            <ProjectsSlider slides={projectsToShow} />
          </Box>
        )}
      </Box>
    </Section>
  );
};
