import { Dialog, useMediaQuery, useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";

interface IFullscreenPhotoProps {
  open: boolean;
  projectName: string;
  photoSrc: string;
  handleClose: () => void;
}

export const FullscreenPhoto = ({
  open,
  projectName,
  photoSrc,
  handleClose,
}: IFullscreenPhotoProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      scroll="body"
      maxWidth="xl"
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
          backgroundColor: "transparent",
          boxShadow: 0,
        },
      }}
    >
      <Typography variant="h5" gutterBottom color="#fff">
        {projectName}
      </Typography>
      <Box
        component="img"
        src={photoSrc}
        alt={projectName}
        sx={{ width: "100%" }}
      />
    </Dialog>
  );
};
