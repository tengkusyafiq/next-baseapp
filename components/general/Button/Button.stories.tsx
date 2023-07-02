import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "General/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    intent: "primary",
    underline: false,
    children: "Click me",
    size: "lg",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cRFe8veSXSlJASg7Awb40a/Vimigo-Web?type=design&node-id=4566-28756&mode=design&t=CdZQX1P2FtcOrVeQ-4",
    },
  },
}

type Story = StoryObj<typeof Button>

// primary intent is the default
export const Primary: Story = {
  render: (args) => <Button {...args} />,
}

// secondary intent
export const Secondary: Story = {
  render: (args) => <Button {...args} intent="secondary" />,
}

export default meta
