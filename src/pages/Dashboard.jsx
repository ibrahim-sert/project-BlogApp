import React, { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import Card from "../components/blog/Card";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { getBlogsData } = useBlogCalls();
  useEffect(() => {
    getBlogsData("blogs");
  }, []);

  return (
    <div>
      {blogs.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default Dashboard;
