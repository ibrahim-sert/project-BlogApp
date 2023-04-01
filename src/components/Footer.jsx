import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        p: 2,
        position: "fixed",
        textAlign: "center",
        bottom: 0,
        bgcolor: "red",
        color: "white",
        width: "100%",
      }}
    >
      <Typography>Developed by Abrahams Team</Typography>
      <Typography>
        Copyright ©{" "}
        <a target="blank" href="https://github.com/ibrahim-sert">
          Abramows
        </a>{" "}
        2023
      </Typography>
    </Box>
  );
};

export default Footer;
