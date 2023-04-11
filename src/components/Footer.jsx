import { Box, Typography } from "@mui/material";

const Footer = () => {
  const styles = {
    width: "100%",
    height: "10vh",
    padding: "5px",
    color: "black",
    bgcolor: "primary.main",
    textAlign: "center",
    marginTop: "20px",
    bgcolor: "red",
    fontSize: "bold",
  };
  return (
    <Box sx={styles}>
      <Typography p={1}>Developed by Abrahams Team</Typography>
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
