import { defineConfig, createSystem } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: "'MedievalSharp', cursive",
        },
        body: {
          value: "'MedievalSharp', cursive",
        },
      },
    },
  },
});

const system = createSystem(config);
export default system;
