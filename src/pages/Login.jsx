import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import image from "../assets/img.png";
import { Formik } from "formik";
import LoginForm from "../components/auth/LoginForm";
// import useAuthCall from "../hooks/useAuthCall";
import { Link } from "react-router-dom";

const Login = () => {
  //   const { login } = useAuthCall();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "88vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="red" align="center">
            BLOG APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              width: 40,
              height: 40,
              m: "auto",
              bgcolor: "red",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4" align="center" mb={2} color="red">
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            // validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              //   login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <Container>
            <img src={image} alt="img" width={400} />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Login;
