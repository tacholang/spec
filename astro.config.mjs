import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

export default defineConfig({
  markdown: {
    gfm: true
  },
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: "Tacholang",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/tacholang/spec" }],
      sidebar: [
        {
          label: "Language Specification",
          items: [
            { slug: "spec/modules" },
            { slug: "spec/files" },
            { slug: "spec/classes" },
            { slug: "spec/fields" },
            { slug: "spec/syntax-reference" },
          ],
        },
        {
          label: "Standard Library",
          items: [{ slug: "std/io" }],
        },
      ],
    }),
  ],
});
