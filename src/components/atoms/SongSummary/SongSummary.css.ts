import { vars } from "@/styles/theme.css";
import { Colors } from "@/styles/types";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const headingStyle = style({
  fontSize: "1.8rem",
  fontWeight: "bold",
  wordBreak: "break-word",
});

export const difficultyStyle = recipe({
  variants: {
    color: {
      cyan: {
        color: vars.color.cyan,
      },
      yellow: {
        color: vars.color.yellow,
      },
      red: {
        color: vars.color.red,
      },
      green: {
        color: vars.color.green,
      },
      pink: {
        color: vars.color.pink,
      },
    } satisfies Colors<{ readonly color: string }>,
  },
});

export const paragraphStyle = style({
  fontSize: "1.4rem",
});
