/* eslint-disable @typescript-eslint/naming-convention */
import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button/Button"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    variant: "default",
    children: "Click me",
    size: "default",
  },
  argTypes: {
    variant: {
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "select" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
}

type Story = StoryObj<typeof Button>

// default variant
export const Default: Story = {
  render: (args) => <Button {...args} />,
}

// destructive variant
export const Destructive: Story = {
  render: (args) => <Button {...args} />,
  args: {
    variant: "destructive",
  },
}

// outline variant
export const Outline: Story = {
  render: (args) => <Button {...args} />,
  args: {
    variant: "outline",
  },
}

// secondary variant
export const Secondary: Story = {
  render: (args) => <Button {...args} />,
  args: {
    variant: "secondary",
  },
}

// ghost variant
export const Ghost: Story = {
  render: (args) => <Button {...args} />,
  args: {
    variant: "ghost",
  },
}

// link variant
export const Link: Story = {
  render: (args) => <Button {...args} />,
  args: {
    variant: "link",
  },
}

export default meta
