import { rx, type tmPattern } from "../util.ts";
import { multiLineComment, simpleValues } from "./simple.ts";

export const statementAndExpression: tmPattern = {
  patterns: [
    {
      match: rx(/\./),
      name: "punctuation.tl",
    },

    {
      begin: rx(/[a-zA-Z]+\(/),
      beginCaptures: {
        "0": {
          patterns: [
            {
              match: rx(/\(/),
              name: "punctuation.tl",
            },

            {
              match: rx(/new/),
              name: "entity.ctor.tl",
            },
            {
              match: rx(/[a-zA-Z]+/),
              name: "identifier.tl",
            },
          ],
        },
      },
      end: rx(/\)/),
      endCaptures: {
        "0": { name: "punctuation.tl" },
      },
      patterns: [{ match: rx(/,/), name: "punctuation.tl" }, { include: "#expression" }],
    },
  ],
};

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
  patterns: [multiLineComment, ...simpleValues, statementAndExpression],
};
