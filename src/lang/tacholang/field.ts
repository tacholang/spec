import { rx, type tmPattern } from "../util.ts";
import attribute from "./attribute.ts";
import typePattern from "./type.ts";
import { variableIdentifier } from "./identifier.ts";
import { expression } from "./stmt-expr.ts";

export const fieldLike: tmPattern = {
  match: rx(/(([a-z()-]+\s+)+)?(\[[^\]]+]\s+)*([a-zA-Z0-9$_<>]+[!?]?)\s+([a-zA-Z0-9_$]+)/),
  captures: {
    "1": { name: "storage.modifier.tl" },
    "3": attribute,
    "4": { patterns: [typePattern] },
    "5": { patterns: [variableIdentifier] },
  },
};

export const field: tmPattern = {
  patterns: [
    {
      match: rx(/([^=]+) (=) (.*)$/),
      captures: {
        "1": { patterns: [fieldLike] },
        "2": { name: "punctuation.tl" },
        "3": { patterns: [expression] },
      },
    },
    {
      match: rx(/$\s*[^={}]+$/),
      captures: {
        "0": { patterns: [fieldLike] },
      },
    },
  ],
};
