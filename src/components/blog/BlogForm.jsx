import {
  Box,
  Button,
  Container,
  CssBaseline,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  minHeight: "90vh",
};

const BlogForm = ({ formData, handleChange, text, handleSubmit }) => {
  const { categories } = useSelector((state) => state.blog);

  const { getCategories } = useBlogCalls();

  useEffect(() => {
    getCategories("categories");
  }, []);

  return (
    <Container sx={style} component="main" maxWidth="xs">
      <CssBaseline />
      <Box>
        <Box component="form" onSubmit={(e) => handleSubmit(e)} sx={{ mt: 1 }}>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              color: "darkslategray",
              letterSpacing: "3px",
              fontFamily: "fantasy",
              marginTop: "10px",
            }}
          >
            {text} Blog
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            color="success"
            value={formData?.title || ""}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="image"
            label="Image URL"
            type="url"
            id="imageUrl"
            color="success"
            value={formData?.image || ""}
            onChange={handleChange}
          />

          <TextField
            margin="dense"
            select
            fullWidth
            label="Category"
            id="category"
            name="category"
            value={formData?.category || ""}
            onChange={handleChange}
            required
          >
            <MenuItem>Please choose...</MenuItem>
            {categories?.map((category) => {
              return (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            margin="dense"
            select
            fullWidth
            label="Status"
            id="status"
            name="status"
            value={formData?.status || ""}
            onChange={handleChange}
            required
          >
            <MenuItem>Please choose...</MenuItem>
            <MenuItem value="d">Draft</MenuItem>
            <MenuItem value="p">Published</MenuItem>
          </TextField>
          <TextField
            placeholder="Content"
            multiline
            rows={2}
            margin="normal"
            required
            fullWidth
            name="content"
            label="Content"
            id="content"
            color="success"
            value={formData?.content || ""}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "secondary.main" },
            }}
          >
            {text} Blog
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogForm;
