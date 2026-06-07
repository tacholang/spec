import { rx, type tmPattern } from "../util.ts";

const typePattern: tmPattern = {
  match: rx(/((uint|int|ulong|long|float|double|string|object|void|self)[?!]?)|(([a-zA-Z0-9$_.<>]+)[?!]?)/),
  captures: {
    "1": {
      name: "storage.type.primitive.tl",
      patterns: [
        {
          match: rx(/[?!]/),
          name: "punctuation.tl",
        },
      ],
    },
    "3": {
      patterns: [
        {
          match: rx(/[^.]/),
          captures: {
            "0": {
              patterns: [
                {
                  match: rx(/[<>?!]/),
                  name: "punctuation.tl",
                },
                {
                  match: rx(/[a-zA-Z0-9$_]+/),
                  name: "constant.tl.class_name",
                },
              ],
            },
          },
        },
      ],
    },
  },
};

export default typePattern;

export const fullyQualifiedPattern: tmPattern = {
  match: rx(/([a-z0-9_]+|mod)((\.)[a-z][a-z0-9_]*)*(\.)([A-Z$_][a-z$_]+)/),
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
    "4": { name: "punctuation.tl" },
    "5": { name: "constant.tl.class_name" },
  },
};
