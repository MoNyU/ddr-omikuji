import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const paragraphStyle = style({
  fontSize: "1.4rem",
  textAlign: "center",
  marginTop: "16px",
});

export const formStyle = style({
  display: "flex",
  flexFlow: "column wrap",
  width: "100%",
  maxWidth: "320px",
  marginTop: "24px",
});

export const labelStyle = style({
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginTop: "16px",
});

export const rowStyle = style({
  display: "flex",
  alignItems: "center",
  fontSize: "1.6rem",
  marginTop: "4px",
});

export const radioStyle = style({
  margin: 0,
});

export const radioLabelStyle = style({
  fontSize: "1.6rem",
  paddingLeft: "4px",
  marginRight: "16px",
});

export const numberInputStyle = style({
  width: "64px",
});

export const submitButtonStyle = style({
  fontWeight: "bold",
  color: "white",
  backgroundColor: `${vars.color.submitGreen} !important`,
  marginTop: "48px",
});
