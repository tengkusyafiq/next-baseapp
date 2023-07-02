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
      url: "https://www.figma.com/file/cRFe8veSXSlJASg7Awb40a/Vimigo-Web?type=design&node-id=4705-26666&mode=design&t=CdZQX1P2FtcOrVeQ-4",
    },
  },
}

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {},
}

export default meta
