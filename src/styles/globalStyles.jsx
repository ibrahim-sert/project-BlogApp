import { blue, grey, red } from "@mui/material/colors/";

export const btnStyle = {
  color: "white",
  bgcolor: "red",
  cursor: "pointer",
  "&:hover": { color: "red", bgcolor: grey[400] },
};

export const CardBlog = {
  display: "flex",
  flexDirection: "column",
};

export const cardStyle = {
  cursor: "pointer",
  maxWidth: 345,
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

export const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 2,
  color: "red",
};

export const flexCard = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  mt: "1rem",
};

export const iconsBtn = {
  display: "flex",
  justifyContent: "space-around",
  width: "80%",
};
export const iconLi = {
  "&:hover": { transform: "scale(1.5)" },
  cursor: "pointer",
  color: "blue",
};
export const iconGi = {
  "&:hover": { transform: "scale(1.5)" },
  cursor: "pointer",
  color: "black",
};
export const iconIns = {
  "&:hover": { transform: "scale(1.5)" },
  cursor: "pointer",
  color: red[300],
};
export const iconTwi = {
  "&:hover": { transform: "scale(1.5)" },
  cursor: "pointer",
  color: blue[600],
};
export const iconYou = {
  "&:hover": { transform: "scale(1.5)" },
  cursor: "pointer",
  color: "red",
};

export const cardButton = {
  display: "flex",
  justifyContent: "center",
  gap: 4,
};

export const iconStyle = {
  display: "flex",
  justifyContent: "space-around",
  gap: 2,
  fontSize: "1.5rem",
  width: 100,
  m: 2,
};

export const btnDetail = {
  color: "black",
  bgcolor: red[200],

  "&:hover": { color: "white", bgcolor: "red" },
};
