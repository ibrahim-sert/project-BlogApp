import React from "react";
import { CardMedia, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser, image, email, bio } = useSelector((state) => state.auth);

  return (
    <>
      <Box>
        <title>BlogApp - User Profile</title>
      </Box>
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            margin: "1rem",
          }}
        >
          <Box>
            <CardMedia
              component="img"
              image={image}
              alt={currentUser}
              sx={{ width: 300, height: 300, overflow: "hidden" }}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ width: "300px", marginBottom: 3, textAlign: "left" }}>
            <Typography variant="h5" sx={{ my: 2 }}>
              {`Username : ${currentUser}`}
            </Typography>
            <Typography variant="h5" sx={{ my: 2 }}>
              {`Email : ${email}`}
            </Typography>
            <Typography variant="h5" sx={{ my: 2 }}>
              {`Bio : ${bio}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
