import { defineConfig, createSystem } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: "'EB Garamond', serif",
        },
        body: {
          value: "'EB Garamond', serif",
        },
      },
    },
  },
});

const system = createSystem(config);
export default system;
