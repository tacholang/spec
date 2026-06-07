import tacholangModuleHighlight from "./src/assets/shiki/tl-module.tmLanguage.json" with { type: "json" };
import tacholang from "./src/lang/tacholang.ts";

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  shiki: {
    langs: [tacholang, tacholangModuleHighlight],
  },
};
