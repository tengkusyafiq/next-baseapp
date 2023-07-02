import type { Meta, StoryObj } from "@storybook/react"
import { Modal } from "./Modal"

const meta: Meta<typeof Modal> = {
  title: "General/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
}

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {},
}

export default meta
