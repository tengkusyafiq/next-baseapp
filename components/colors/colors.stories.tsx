/* eslint-disable import/no-anonymous-default-export */

export default {
  title: "Guidelines / Colors",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cRFe8veSXSlJASg7Awb40a/Vimigo-Web?type=design&node-id=4575-26377&mode=design&t=n48IXhsLgUPVs82T-4",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // override docs page
  docs: {
    description: {
      component: "Guidelines for colors",
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}

export const PRIMARY = () => (
  <div>
    {/* Show primary color in a a rectangle block */}
    <div className="h-20 w-20 bg-primary" />
    {/* label */}
    <div className="text-primary">Primary color</div>
    {/* usage */}
    <div className="text-primary">Used for primary buttons, links, and other interactive elements.</div>
  </div>
)
