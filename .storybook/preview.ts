import type { Preview } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"

// These styles apply to every route in the application
import "../styles/globals.css"

const preview: Preview = {
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
