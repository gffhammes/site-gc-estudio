import { Dialog, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";

interface IFullscreenPhotoProps {
  open: boolean;
  handleClose: () => void;
}

export const FullscreenPhoto = ({
  open,
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
      sx={{ "& .MuiDialog-paper": { width: "100%" } }}
    >
      <Box
        sx={{ height: "20000px", width: "100%", backgroundColor: "red" }}
      ></Box>
    </Dialog>
  );
};
