import React, { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { flexCard } from "../styles/globalStyles";
import Cards from "../components/blog/Cards";

const MyBlogs = () => {
  const { getMyBlogData } = useBlogCalls();
  const { myBlog } = useSelector((state) => state.blog);
  const { id } = useSelector((state) => state.auth);
  useEffect(() => {
    getMyBlogData("blogs", id);
  }, []);

  return (
    <>
      <Grid container sx={flexCard}>
        {myBlog?.map((item) => (
          <Grid item key={item.id}>
            {<Cards item={item} />}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyBlogs;
