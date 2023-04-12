import React, { useEffect, useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import CommentCard from "../components/blog/CommentCard";
import { Box } from "@mui/material";

const Detail = () => {
  const { getCommet, getBlogsData } = useBlogCalls();
  const { details } = useSelector((state) => state.blog);
  const [showComment, setShowComment] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { id } = useParams();

  useEffect(() => {
    getCommet("blogs", id);
    getBlogsData("blogs");
  }, []);

  return (
    <Box mt={10}>
      <CommentCard
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        details={details}
        showComment={showComment}
        setShowComment={setShowComment}
      />
    </Box>
  );
};

export default Detail;
