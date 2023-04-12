import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FaceIcon from "@mui/icons-material/Face";
import {
  btnDetail,
  cardButton,
  cardStyle,
  iconStyle,
} from "../../styles/globalStyles";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box } from "@mui/material";

import { useNavigate } from "react-router";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";

const Cards = ({ item }) => {
  const {
    image,
    title,
    content,
    publish_date,
    author,
    post_views,
    comment_count,
    likes,
    likes_n,
  } = item;

  const navigate = useNavigate();
  const { getLike } = useBlogCalls();
  const { id } = useSelector((state) => state.auth);

  const handleLike = () => {
    getLike("likes", item.id);
  };

  return (
    <Card sx={cardStyle}>
      <Typography
        component="div"
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      >
        <img
          height="150"
          src={image ? image : "https://www.w3schools.com/howto/img_avatar.png"}
          alt="img"
        />
      </Typography>
      <CardContent>
        <Typography align="center" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          sx={{ textAlign: "justify", minHeight: "120px" }}
          variant="body2"
          color="text.secondary"
        >
          {content}
        </Typography>
        <Typography sx={{ my: 1, fontSize: "0.9rem" }}>
          {publish_date}
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <FaceIcon />
          {author}
        </Typography>
      </CardContent>
      <CardActions sx={cardButton}>
        <Box sx={iconStyle}>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <ThumbUpIcon
              sx={{
                color: `${
                  likes_n?.filter((like) => like.user_id === id).length > 0
                    ? "red"
                    : "gray"
                }`,
              }}
              onClick={handleLike}
            />
            {likes}
          </Typography>

          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <MessageIcon />
            {comment_count}
          </Typography>

          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <RemoveRedEyeIcon />
            {post_views}
          </Typography>
        </Box>
        <Button
          onClick={() => navigate(`/detail/${item.id}`)}
          sx={btnDetail}
          variant="contained"
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
export default Cards;
