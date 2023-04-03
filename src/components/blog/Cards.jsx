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
import { useState } from "react";
import { useSelector } from "react-redux";

const Cards = ({ item }) => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const { currentUser } = useSelector((state) => state.auth);

  const handleLike = () => {
    if (!like) {
      setCount(count + 1);
      setLike(!like);
    } else {
      setCount(count - 1);
      setLike(!like);
    }
  };

  return (
    <Card sx={cardStyle}>
      <Typography
        component="div"
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      >
        <img
          height="150"
          src={
            item.image
              ? item.image
              : "https://www.w3schools.com/howto/img_avatar.png"
          }
          alt="img"
        />
      </Typography>
      <CardContent>
        <Typography align="center" gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography
          sx={{ textAlign: "justify", minHeight: "120px" }}
          variant="body2"
          color="text.secondary"
        >
          {item.content}
        </Typography>
        <Typography sx={{ my: 1, fontSize: "0.9rem" }}>
          {item.publish_date}
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <FaceIcon />
          {item.author}
        </Typography>
      </CardContent>
      <CardActions sx={cardButton}>
        <Box sx={iconStyle}>
          <Typography
            onClick={handleLike}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ThumbUpIcon />
            {count}
          </Typography>

          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <MessageIcon />2
          </Typography>

          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <RemoveRedEyeIcon />3
          </Typography>
        </Box>

        <Button sx={btnDetail} variant="contained">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
export default Cards;
