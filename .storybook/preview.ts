import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // shows a11y violations in the test UI only
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
