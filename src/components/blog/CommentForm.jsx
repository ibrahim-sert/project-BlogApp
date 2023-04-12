import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

export default function CommentForm({ comments }) {
  return (
    <List
      sx={{
        width: "80%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      {comments?.map((item) => {
        return (
          <>
            <ListItem key={item.id}>
              <ListItemText
                primary={item.user}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline", mr: 2 }}
                      component="span"
                      variant="body4"
                      color="text.secondary"
                    >
                      {new Date(item.time_stamp).toUTCString().slice(0, 16)}
                    </Typography>
                    <Typography
                      component="p"
                      variant="body1"
                      color="text.primary"
                    >
                      {item.content}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </>
        );
      })}
    </List>
  );
}
