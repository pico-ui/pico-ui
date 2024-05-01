import type { Paths } from "@utils/paths.type";

export interface PicoPluginOptions {
  // TODO - FUTURE: strict option that moves omitting TW config options behind a flag
  // strict?: boolean;

  responsiveTypography: boolean; // TODO: how to reconcile with tw typography plugin - is it needed?

  // TODO: default false
  // TODO: add $enable-semantic-container from Pico?
  // TODO: add $enable-responsive-spacings from Pico?
  themes?:
    | boolean
    | Partial<{
        default: boolean;
      }>;
  layout?:
    | boolean
    | Partial<{
        document: boolean;
        landmarks: boolean;
        container: boolean;
        section: boolean;
        grid: boolean | "pico";
      }>;
}

export type PicoPluginOptionPaths = Exclude<
  Paths<PicoPluginOptions>,
  "layout" | "themes"
>;

export const defaultOptions = {
  responsiveTypography: true,
  themes: true,
  layout: true,
} as PicoPluginOptions;

export const futureDefaultOptions = {
  responsiveTypography: false,
  themes: true,
  layout: {
    document: true,
    landmarks: true,
    container: true,
    section: true,
    grid: "pico", // TODO - FUTURE: set to `false`
  },
} as PicoPluginOptions;
