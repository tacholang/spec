import type { LanguageRegistration } from "shiki";

export type tmPattern = NonNullable<LanguageRegistration["patterns"]>[number];

export const rx: (regex: RegExp) => string = (regex) => regex.source;
