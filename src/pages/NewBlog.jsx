import React, { useState } from "react";
import BlogForm from "../components/blog/BlogForm";
import useBlogCalls from "../hooks/useBlogCalls";
import { Box } from "@mui/material";

const initialState = {
  title: "",
  image: "",
  category: "",
  status: "",
  content: "",
};

const NewBlog = () => {
  const { postBlog } = useBlogCalls();
  const [formData, setformData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postBlog("blogs", formData);
    setformData(initialState);
  };

  return (
    <Box mt={75}>
      <Box>
        <title>BlogApp - New Blog</title>
      </Box>
      <BlogForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text="New"
      />
    </Box>
  );
};

export default NewBlog;
