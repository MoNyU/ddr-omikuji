export type Color =
  | "cyan"
  | "yellow"
  | "red"
  | "green"
  | "submitGreen"
  | "pink";

export type Colors<T = any> = { readonly [key in Color]?: T };
