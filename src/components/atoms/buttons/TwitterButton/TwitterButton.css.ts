import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "#00aced !important",
  width: "180px",
  color: "white !important",
  fontSize: "1.2rem !important",
  fontWeight: "bold !important",
  padding: "4px 16px 4px 8px !important",
  outline: "none",
  borderRadius: "4px",
});
