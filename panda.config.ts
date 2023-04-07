import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to include css reset styles in the generated css.
  preflight: true,

  // Files to watch for changes.
  include: ["./src/**/*.{tsx,jsx}"],

  // Used to create reusable config presets for your project or team.
  presets: ["@pandacss/dev/presets"],

  // The framework to use for generating supercharged elements.
  jsxFramework: "react",

  // The output directory.
  outdir: "panda",
});
