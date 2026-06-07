import type { tmPattern } from "../util.ts";
import typePattern from "./type.ts";

export const genericTypeDefinition: tmPattern = {
  match: "([A-Z0-9]+)(( : [^&: ]+)?( & [^&: ]+)*)",
  captures: {
    "1": { name: "constant.tl.class_name" },
    "2": {
      patterns: [
        {
          match: "[:&]",
          name: "punctuation.tl",
        },
        typePattern,
      ],
    },
  },
};

export const genericTypeDefinitions: tmPattern = {
  match: "(([^,<>]+)(,[^,<>]+)*)",
  captures: {
    "1": {
      patterns: [
        {
          match: ",",
          name: "punctuation.tl",
        },
        genericTypeDefinition,
      ],
    },
  },
};
