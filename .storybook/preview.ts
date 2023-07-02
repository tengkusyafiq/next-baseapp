import type { Preview } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"

// These styles apply to every route in the application
import "../styles/globals.css"

const preview: Preview = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cRFe8veSXSlJASg7Awb40a/Vimigo-Web?type=design&node-id=503-6384&mode=design&t=CdZQX1P2FtcOrVeQ-0",
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
