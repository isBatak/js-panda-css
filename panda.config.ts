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

  theme: {
    extend: {
      tokens: {
        colors: {
          infinum: {
            50: { value: "#FBE9EA" },
            100: { value: "#F7D3D5" },
            200: { value: "#EFA8AB" },
            300: { value: "#E77D81" },
            400: { value: "#E05257" },
            500: { value: "#D8262C" },
            600: { value: "#BD2127" },
            700: { value: "#A21C21" },
            800: { value: "#87171C" },
            900: { value: "#6C1216" },
          },
        },
      },
      recipes: {
        link: {
          name: "link",
          description: "A link styles",
          base: {},
          variants: {
            variant: {
              primary: {
                color: "infinum.500",
                textDecoration: "underline",
                _hover: {
                  color: "infinum.600",
                },
                _active: {
                  color: "infinum.700",
                },
              },
              unstyled: {
                color: "inherit",
                textDecoration: "none",
              }
            },

          },
          defaultVariants: {
            variant: "primary",
          },
        },
      },
    },
  },

  patterns: {
    extend: {
      container: {
        transform(props) {
          // TODO descructuring props.centerContent is not working @panda
          delete props.centerContent;

          return Object.assign(
            {
              position: "relative",
              width: "100%",
              maxWidth: "7xl",
              mx: "auto",
              paddingX: { base: "4", md: "6" },
            },
            props
          );
        },
      },
    },
  },
});
