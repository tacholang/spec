import { rx, type tmPattern } from "../util.ts";
import { expression } from "./stmt-expr.ts";

const attribute: tmPattern = {
  patterns: [
    {
      begin: rx(/(\[[a-zA-Z]+)(\()/),
      beginCaptures: {
        "1": { name: "entity.other.attribute-name.tl" },
        "2": { name: "punctuation.tl" },
      },
      end: rx(/(\))(])/),
      endCaptures: {
        "1": { name: "punctuation.tl" },
        "2": { name: "entity.other.attribute-name.tl" },
      },
      patterns: [expression],
    },
    {
      match: rx(/\[[a-zA-Z]+]/),
      name: "entity.other.attribute-name.tl",
    },
  ],
};

export default attribute;
