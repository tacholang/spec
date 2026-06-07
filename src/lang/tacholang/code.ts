import type { tmPattern } from "../util.ts";
import { multiLineComment, singleLineComment } from "./simple.ts";
import { methodFieldCodePatterns } from "./def.ts";
import { field } from "./field.ts";
import attribute from "./attribute.ts";
import classes from "./classes.ts";

const code: tmPattern = {
  patterns: [singleLineComment, multiLineComment, attribute, ...classes, field, ...methodFieldCodePatterns],
};

export default code;
