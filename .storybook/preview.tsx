import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"
import { useDarkMode } from "storybook-dark-mode"
import { Title, Subtitle, Description, Primary, Controls, Stories } from "@storybook/blocks"

// These styles apply to every route in the application
import "../styles/globals.css"
import React from "react"
const customViewPorts = {
  xs: {
    name: "small-phones",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
  sm: {
    name: "phones",
    styles: {
      width: "640px",
      height: "960px",
    },
  },
  md: {
    name: "tablets",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  lg: {
    name: "laptops",
    styles: {
      width: "1024px",
      height: "768px",
    },
  },
  xl: {
    name: "desktops",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
  xxl: {
    name: "big-desktops",
    styles: {
      width: "1536px",
      height: "864px",
    },
  },
}

const preview: Preview = {
  decorators: [
    // return dark mode background color
    (Story) => {
      // const isDark = useDarkMode()
      return (
        // <div className={isDark ? "bg-black" : "bg-white"}>
        <div className="p-4">
          <Story />
        </div>
        // </div>
      )
    },
  ],
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: { ...themes.dark, appBg: "#000000" },
      light: { ...themes.normal, appBg: "#ffffff" },
      current: "dark",
      stylePreview: true,
    },
    // backgrounds: {
    //   disable: true,
    // },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#000000",
        },
      ],
    },
    viewport: {
      viewports: {
        ...customViewPorts,
      },
    },
  },
}

export default preview
