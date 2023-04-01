import { Box, Paper, Typography } from "@mui/material";
import NavbarIcon from "../assets/avatar.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  flex,
  iconGi,
  iconIns,
  iconLi,
  iconTwi,
  iconYou,
  iconsBtn,
} from "../styles/globalStyles";
import { red } from "@mui/material/colors";
const About = () => {
  return (
    <Box
      sx={{
        mt: 5,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",

        "& > :not(style)": {
          m: 1,
          width: 300,
          height: 400,
        },
      }}
    >
      <Paper sx={flex} elevation={24}>
        <img src={NavbarIcon} alt="img" />
        <Typography sx={{ fontSize: "2rem" }}>Abraham's</Typography>
        <Typography sx={{ fontSize: "2rem" }}>Our Team 💪</Typography>
        <Box sx={iconsBtn}>
          <LinkedInIcon sx={iconLi} />
          <GitHubIcon sx={iconGi} />
          <InstagramIcon sx={iconIns} />
          <TwitterIcon sx={iconTwi} />
          <YouTubeIcon sx={iconYou} />
        </Box>
      </Paper>
    </Box>
  );
};

export default About;
