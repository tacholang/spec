import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: "Tacholang",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/tacholang/docs" }],
      sidebar: [
        {
          label: "Language Specification",
          items: [{ slug: "spec/modules" }, { slug: "spec/files" }, { slug: "spec/classes" }, { slug: "spec/fields" }],
        },
        {
          label: "Standard Library",
          items: [{ slug: "std/io" }],
        },
      ],
    }),
  ],
});
