import { style } from "@vanilla-extract/css";

export const articleStyle = style({
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "center",
  width: "100%",
  padding: "16px",
  paddingBottom: "48px",
});

export const headingStyle = style({
  fontSize: "2.4rem",
  cursor: "pointer",
});
