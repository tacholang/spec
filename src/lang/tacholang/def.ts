import { rx, type tmPattern } from "../util.ts";
import typePattern from "./type.ts";
import attribute from "./attribute.ts";
import { variableIdentifier } from "./identifier.ts";

export const methodParameters: tmPattern = {
  match: rx(/[^)]*/),
  captures: {
    "0": {
      patterns: [
        {
          match: rx(/,/),
          name: "punctuation.tl",
        },
        attribute,
        {
          match: "([^ ]+) ([a-zA-Z0-9$_]+)",
          captures: {
            "1": { patterns: [typePattern] },
            "2": { patterns: [variableIdentifier] },
          },
        },
      ],
    },
  },
};

export const method: tmPattern = {
  begin: rx(/([a-z()-]+ )*([a-zA-Z0-9$_<>]+[!?]?) ([a-zA-Z_$]+)([(])/),
  end: rx(/\)/),
  name: "storage.modifier.tl",
  beginCaptures: {
    "2": { patterns: [typePattern] },
    "3": { patterns: [variableIdentifier] },
    "4": { name: "punctuation.tl" },
  },
  endCaptures: {
    "0": { name: "punctuation.tl" },
  },
  patterns: [methodParameters],
};

const constructor: tmPattern = {
  begin: rx(/([a-z()-]+ )*(new)([(])/),
  end: rx(/\)/),
  beginCaptures: {
    "1": { name: "storage.modifier.tl" },
    "2": { name: "entity.name.type" },
    "3": { name: "punctuation.tl" },
  },
  endCaptures: {
    "0": { name: "punctuation.tl" },
  },
  patterns: [methodParameters],
};

export const methodFieldCodePatterns = [constructor, method];
