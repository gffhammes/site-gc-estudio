import { Box, Container } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import React, { ReactNode } from "react";
import { defaultSectionPadding } from "../../constants/defaultSectionPadding";

interface ISectionProps {
  children: ReactNode | ReactNode[];
  id: string;
  backgroundColor?: string;
  sx?: SxProps<Theme>;
}

export const Section = ({
  children,
  id,
  backgroundColor = "#fff",
  sx,
}: ISectionProps) => {
  return (
    <Box
      component="section"
      id={id}
      sx={{ py: defaultSectionPadding, backgroundColor, ...sx }}
    >
      <Container>{children}</Container>
    </Box>
  );
};
