import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "il-wc",
  globalStyle: "src/global/variables.css",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements-bundle",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: "il-wc",
      proxiesFile: "../il-wc-react/src/components.ts",
      includeDefineCustomElements: true,
    }),
  ],
  plugins: [sass()],
};
