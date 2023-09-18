import * as Toggle from "@radix-ui/react-toggle"
import { ToolbarButton } from "@radix-ui/react-toolbar"

type Props = {
  title: string
  onPress: () => void
  icon: React.ReactNode
}

export function EditorButton({ icon, title, onPress }: Props) {
  return (
    <ToolbarButton title={title} className={className} onClick={onPress}>
      {icon}
    </ToolbarButton>
  )
}

export function EditorToggle({ icon, title, active, onPress }: Props & { active: boolean }) {
  return (
    <Toggle.Toggle asChild title={title} pressed={active} className={className} onPressedChange={onPress}>
      <ToolbarButton>{icon}</ToolbarButton>
    </Toggle.Toggle>
  )
}

const className =
  "toolbar-item inline-flex w-12 h-12 lg:w-9 lg:h-9 items-center justify-center border dark:bg-neutral-950 first:rounded-l-md last:rounded-r-md hover:bg-neutral-400 focus:z-10 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 focus:ring-offset-neutral-800 data-[state=on]:!bg-indigo-300 [&:not(:last-child)]:border-r-0"
