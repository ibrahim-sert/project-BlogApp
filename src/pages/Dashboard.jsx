import React, { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import Cards from "../components/blog/Cards";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { flexCard } from "../styles/globalStyles";

const Dashboard = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { getBlogsData } = useBlogCalls();
  useEffect(() => {
    getBlogsData("blogs");
  }, []);

  return (
    <div>
      <Grid container sx={flexCard}>
        {blogs.map((item) => (
          <Grid item key={item.id}>
            <Cards item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
