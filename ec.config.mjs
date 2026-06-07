import tacholangHighlight from "./src/assets/shiki/tl.tmLanguage.json" with { type: "json" };
import tacholangModuleHighlight from "./src/assets/shiki/tl-module.tmLanguage.json" with { type: "json" };

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  shiki: {
    langs: [tacholangHighlight, tacholangModuleHighlight],
  },
};
