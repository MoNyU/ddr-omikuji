import { globalStyle } from "@vanilla-extract/css";

globalStyle("html", {
  fontSize: "62.5%",
});

globalStyle("body", {
  minHeight: "auto",
  paddingBottom: "env(safe-area-inset-bottom)",
  fontFamily:
    // eslint-disable-next-line @typescript-eslint/quotes
    '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
});
