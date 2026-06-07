import "tsx/esm";

import tacholangModuleHighlight from "./src/assets/shiki/tl-module.tmLanguage.json" with { type: "json" };
const { default: tacholang } = await import("./src/lang/tacholang.ts");

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  shiki: {
    langs: [tacholang, tacholangModuleHighlight],
  },
};
