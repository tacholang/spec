import type { LanguageRegistration } from "shiki";
import { multiLineComment, singleLineComment } from "./tacholang/simple.ts";
import code from "./tacholang/code.ts";
import { rx, type tmPattern } from "./util.ts";
import { fullyQualifiedPattern } from "./tacholang/type.ts";

const packagePattern: tmPattern = {
  match: "([a-z0-9_]+|mod)((\\.)[a-z][a-z0-9_]*)+",
  captures: {
    "1": { name: "constant.tl.module" },
    "2": {
      name: "variable.other.package.tl",
      patterns: [
        {
          match: "\\.",
          name: "punctuation.tl",
        },
      ],
    },
  },
};

const tacholang: LanguageRegistration = {
  name: "tl",
  scopeName: "text.tl",
  repository: {},

  patterns: [
    singleLineComment,
    multiLineComment,

    {
      match: rx(/import package (.*)/),
      name: "keyword.other.import.tl",
      captures: {
        "1": { patterns: [packagePattern] },
      },
    },
    {
      match: rx(/import (.*)/),
      name: "keyword.other.import.tl",
      captures: {
        "1": { patterns: [fullyQualifiedPattern] },
      },
    },

    code,
  ],
};

export default tacholang;
