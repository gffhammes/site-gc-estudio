import { Box, Container, Typography } from "@mui/material";

export const Copyright = () => {
  return (
    <Box sx={{ py: 2, backgroundColor: "#192B51" }}>
      <Container>
        <Typography textAlign="center" color="white.main">
          © 2022 GC Estúdio. Todos os Direitos Reservados.
        </Typography>
      </Container>
    </Box>
  );
};
