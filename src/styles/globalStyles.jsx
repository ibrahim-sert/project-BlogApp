import { blue, grey, red } from "@mui/material/colors/";

export const btnStyle = {
  color: "white",
  bgcolor: "red",
  cursor: "pointer",
  "&:hover": { color: "red", bgcolor: grey[400] },
};

export const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 2,
  color: "red",
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
};
