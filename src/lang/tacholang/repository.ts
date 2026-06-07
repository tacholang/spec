import type { LanguageRegistration } from "shiki";
import { expression, statement, statementExpression } from "./stmt-expr.ts";
import classes from "./classes.ts";
import { methodFieldCodePatterns, methodFieldPatterns } from "./def.ts";
import { types } from "./genericTypeDefinition.ts";

const repository: LanguageRegistration["repository"] = {

  "code-block": {
    begin: "[{]",
    end: "[}]",
    beginCaptures: {
      "0": { name: "punctuation.tl" },
    },
    endCaptures: {
      "0": { name: "punctuation.tl" },
    },
    patterns: [{ include: "#statement" }, { include: "#code" }],
  },
  "block-expression": {
    match: "(=>) (.*)",
    captures: {
      "1": { name: "punctuation.tl" },
      "2": {
        patterns: [
          {
            include: "#expression",
          },
        ],
      },
    },
  },

  ...methodFieldPatterns,
  ...types,

  statement: statement,
  expression: expression,
  "statement-expression": statementExpression,
};

console.log(JSON.stringify(repository, null, 2));

export default repository;
