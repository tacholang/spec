import type { tmPattern } from "../util.ts";
import { booleanValue, multiLineComment, numberValue, stringValue } from "./simple.ts";
import typePattern from "./type.ts";

export const statement: tmPattern = {
  patterns: [
    {
      include: "#comments",
    },
    {
      include: "#statement-expression",
    },
  ],
};

export const expression: tmPattern = {
  patterns: [
    multiLineComment,
    ...stringValue,
    numberValue,
    booleanValue,
    /*
    {
      include: "#type",
    },
    {
      include: "#statement-expression",
    },*/
  ],
};

export const statementAndExpression: tmPattern = {
  patterns: [
    {
      begin: "([A-Za-z0-9_$]+)\\(",
      end: "\\)",
      beginCaptures: {
        "0": { name: "punctuation.tl" },
        "1": { name: "identifier.tl" },
      },
      endCaptures: {
        "0": { name: "punctuation.tl" },
      },
      patterns: [
        {
          include: "#method-parameters",
        },
      ],
    },
  ],
};
