import { createTheme } from "@vanilla-extract/css";
import { Colors } from "./types";

export const [themeClass, vars] = createTheme(
  {
    color: {
      cyan: "#36efff",
      yellow: "#ffc300",
      red: "#f53f57",
      green: "#3aff25",
      submitGreen: "#689f38",
      pink: "#ff42ff",
    } satisfies Colors<string>,
  },
  "theme"
);
