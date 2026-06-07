import { rx, type tmPattern } from "../util.ts";

const modifiers: tmPattern = {
  match: rx(/(\s?[a-z_]+(\([a-z_]+\))?)*/),
  name: "storage.modifier.tl",
  captures: {
    "1": {
      patterns: [
        {
          match: rx(/[()]/),
          name: "punctuation.tl",
        },
      ],
    },
  },
};

export default modifiers;
