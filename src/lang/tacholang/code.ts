import { rx, type tmPattern } from "../util.ts";
import { multiLineComment, singleLineComment } from "./simple.ts";
import { methodFieldCodePatterns } from "./def.ts";
import { field } from "./field.ts";
import attribute from "./attribute.ts";
import classes from "./classes.ts";
import { expression, statement } from "./stmt-expr.ts";

export const codeBlock: tmPattern = {
  begin: rx(/{/),
  end: rx(/}/),
  beginCaptures: { "0": { name: "punctuation.tl" } },
  endCaptures: { "0": { name: "punctuation.tl" } },
  patterns: [statement, { include: "#code" }],
};

export const codeStatement: tmPattern = {
  match: rx(/(=>)\s+(.*)/),
  captures: {
    "1": { name: "punctuation.tl" },
    "2": { patterns: [expression] },
  },
};

export const code: tmPattern = {
  patterns: [singleLineComment, multiLineComment, attribute, ...classes, codeBlock, codeStatement],
};

export const classScope: tmPattern = {
  patterns: [...code.patterns!, field, ...methodFieldCodePatterns],
};
