import { rx, type tmPattern } from "../util.ts";

export const singleLineComment: tmPattern = {
  name: "comment.tl",
  match: rx(/\/\/.*/),
};

export const multiLineComment: tmPattern = {
  begin: rx(/\*/),
  end: rx(/\*\//),
  name: "comment.tl",
};

export const standardString: tmPattern = {
  match: rx(/"[^"]*"/),
  name: "string.tl",
};

export const interpolatedString: tmPattern = {
  begin: rx(/\$"/),
  end: rx(/"/),
  patterns: [
    {
      begin: rx(/\$\{/),
      end: rx(/}/),
      beginCaptures: { "0": { name: "punctuation.tl" } },
      endCaptures: { "0": { name: "punctuation.tl" } },
      name: "text.tl",
    },
    {
      name: "string.interpolated.tl",
      match: rx(/[^}]/),
    },
  ],
  beginCaptures: { "0": { name: "string.interpolated.tl" } },
  endCaptures: { "0": { name: "string.interpolated.tl" } },
};

export const stringValue: tmPattern[] = [standardString, interpolatedString];

export const numberValue: tmPattern = {
  match: rx(/(0x[0-9A-F]+)|(\d+(\.\d+)?)/),
  name: "constant.numeric.tl",
};

export const booleanValue: tmPattern = {
  match: rx(/true|false/),
  name: "constant.language.tl",
};

export const simpleValues: tmPattern[] = [...stringValue, numberValue, booleanValue];
