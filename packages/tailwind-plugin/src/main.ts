import plugin from "tailwindcss/plugin";
import colors from "./colors";

interface PicoPluginOptions {
  // TODO - FUTURE: strict option that moves omitting TW config options behind a flag
  // strict?: boolean;

  // TODO: add $enable-semantic-container from Pico?
  layout?: Partial<{
    document: boolean;
    landmarks: boolean;
  }>;
}

const defaultOptions = {
  layout: {
    document: true,
    landmarks: true,
  },
} as PicoPluginOptions;

// TODO - FUTURE: how to move away from omitting TW defaults?
export default plugin.withOptions(
  (config: PicoPluginOptions = defaultOptions) => {
    return function (api) {
      if (config?.layout?.document) {
        api.addBase({
          "*, *:before, *:after": {
            "box-sizing": "border-box",
            "background-repeat": "no-repeat",
          },
          ":before, :after": {
            "text-decoration": "inherit",
            "vertical-align": "inherit",
          },
          "html, :host": {
            "-webkit-tap-highlight-color": "transparent",
            "text-size-adjust": "100%",
            "background-color": api.theme("colors.white"), // TODO: dark mode
            color: api.theme("colors.zinc.750"), // TODO: dark mode
            "font-weight": api.theme("fontWeight.normal"),
            "font-size": api.theme("fontSize.base"),
            "line-height": api.theme("lineHeight.normal"),
            "font-family": api.theme("fontFamily.sans"),
            "font-feature-settings": "normal",
            "font-variation-settings": "normal",
            "text-underline-offset": api.theme("textUnderlineOffset.01"),
            "text-rendering": "optimizeLegibility",
            "overflow-wrap": "break-word",
            "tab-size": "4",
          },
        });
      }

      if (config?.layout?.landmarks) {
        api.addBase({
          body: {
            width: "100%",
            margin: "0",
          },
          main: {
            display: "block",
          },
        });

        // TODO: semantic-container
      }
    };
  },
  () => {
    return {
      theme: {
        colors,
        screens: {
          sm: "576px",
        },
        textUnderlineOffset: {
          "01": ".1rem",
        },
      },
      corePlugins: {
        preflight: false,
      },
      experimental: {
        optimizeUniversalDefaults: true,
      },
    };
  }
);
