import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FaceIcon from "@mui/icons-material/Face";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, TextField } from "@mui/material";
import {
  CardBlog,
  btnDetail,
  cardButton,
  iconStyle,
} from "../../styles/globalStyles";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useState } from "react";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import UpdateModal from "./UpdateModal";

const CommentCard = ({
  details,
  handleOpen,
  handleClose,
  open,
  showComment,
  setShowComment,
}) => {
  const {
    author,
    content,
    image,
    likes,
    publish_date,
    id,
    comments,
    comment_count,
    post_views,
  } = details;

  const [info, setInfo] = useState(details);
  const [toggle, setToggle] = useState(false);
  const { getLike, postComments, deleteData } = useBlogCalls();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const { currentUser } = useSelector((state) => state.auth);
  const handleToggle = () => {
    setToggle(!toggle);
    setShowComment(!showComment);
  };

  const handleDelete = () => {
    deleteData("blogs", id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComments("comments", id, {
      ...info,
      post: id,
    });
    setInfo({ post: "", comment: "" });
  };

  return (
    <Box sx={{ mx: 10 }}>
      <Card sx={CardBlog}>
        <Typography
          component="div"
          sx={{ display: "flex", justifyContent: "center", mt: 2 }}
        >
          <img
            height="150"
            src={
              image ? image : "https://www.w3schools.com/howto/img_avatar.png"
            }
            alt="img"
          />
        </Typography>
        <CardContent>
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
          <Box sx={iconStyle}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <ThumbUpIcon onClick={() => getLike("likes", details.id)} />
              {likes}
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <MessageIcon onClick={handleToggle} />
              {comment_count}
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <RemoveRedEyeIcon />
              {post_views}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={cardButton}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {details.author === currentUser && (
              <Box
                sx={{
                  my: 3,
                  display: "flex",
                  gap: 3,
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={() => {
                    handleOpen();
                    setInfo(info);
                  }}
                  variant="contained"
                  size="small"
                  color="success"
                >
                  Update Blog
                </Button>
                <Button
                  onClick={handleDelete}
                  variant="contained"
                  size="small"
                  color="error"
                >
                  Delete Blog
                </Button>
              </Box>
            )}
            {toggle && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 800,
                  gap: 4,
                }}
                onSubmit={handleSubmit}
                component="form"
              >
                <hr />
                {showComment && <CommentForm comments={comments} id={id} />}
                <TextField
                  label="comments"
                  id={info.post}
                  name="content"
                  type="text"
                  variant="outlined"
                  onChange={handleChange}
                />

                <Button type="submit" sx={btnDetail} variant="contained">
                  ADD COMMENT
                </Button>
              </Box>
            )}
          </Box>
        </CardActions>

        <UpdateModal open={open} handleClose={handleClose} info={details} />
      </Card>
    </Box>
  );
};

export default CommentCard;
