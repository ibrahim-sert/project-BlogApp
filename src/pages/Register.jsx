import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import { Formik } from "formik";
import image from "../assets/img.png";
import Grid from "@mui/material/Grid";
import RegisterForm from "../components/auth/RegisterForm";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

// import useAuthCall from "../hooks/useAuthCall";

const Register = () => {
  // const { register } = useAuthCall();

  return (
    <Container
      sx={{
        height: "88vh",
      }}
      maxWidth="lg"
    >
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ m: 0 }} color="red" align="center">
            BLOG APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "red",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h5" align="center" mb={2} color="red">
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
            }}
            // validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              // register({ ...values, password2: values.password });
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" width={400} />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
