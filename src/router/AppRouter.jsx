import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import MyBlogs from "../pages/MyBlogs";
import Profile from "../pages/Profile";
import Detail from "../pages/Detail";
import { Box } from "@mui/material";

const AppRouter = () => {
  return (
    <Box>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/profile" element={<PrivateRouter />}>
            <Route path="" element={<Profile />} />
          </Route>
          <Route path="/" element={<Dashboard />} />

          <Route path="/new-blog" element={<PrivateRouter />}>
            <Route path="" element={<NewBlog />} />
          </Route>
          <Route path="/myblogs" element={<PrivateRouter />}>
            <Route path="" element={<MyBlogs />} />
          </Route>
          <Route path="/detail/:id" element={<PrivateRouter />}>
            <Route path="" element={<Detail />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default AppRouter;
