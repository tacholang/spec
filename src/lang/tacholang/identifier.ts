import { rx, type tmPattern } from "../util.ts";

export const variableIdentifier: tmPattern = {
  match: rx(/[a-zA-Z_][a-zA-Z0-9_$]*/),
  name: "identifier.tl",
};

export const classIdentifier: tmPattern = {
  match: rx(/[A-Z][a-zA-Z0-9_$]+/),
  name: "identifier.tl",
};
