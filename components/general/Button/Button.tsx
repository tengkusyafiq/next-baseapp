import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const button = cva(
  [
    // general styles
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "border",
    "border-blue-400",
    "transition-colors",
    "delay-[50]",
  ],
  {
    variants: {
      /** The intent of the button, either primary or secondary. */
      intent: {
        // type name, and the classes that will be applied when the variant is active
        primary: ["bg-blue-400", "text-white", "hover:enabled:bg-blue-700"],
        secondary: ["bg-transparent", "text-blue-400", "hover:enabled:bg-blue-400", "hover:enabled:text-white"],
      },
      /** The size of the button, either sm or lg. */
      size: {
        // size variants
        sm: ["min-w-[20]", "h-full", "min-h-[10]", "text-sm", "py-1.5", "px-4"],
        lg: ["min-w-[32]", "h-full", "min-h-[12]", "text-lg", "py-2.5", "px-6"],
      },
      // custom variants can be added
      /** Whether the button should have an underline. */
      underline: { true: ["underline"], false: [] },
    },
    // default variants are applied when no variant is specified
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
  // register your custom props here
  /** Whether the button should have an underline. */
  underline?: boolean
  /** The href/link of the button. */
  href: string
}

/**
 * Button component with different variants.
 * @param props
 * @returns Button
 */
export function Button({ className, intent, size, underline, ...props }: ButtonProps) {
  return (
    <a className={twMerge(button({ className, intent, size, underline }))} {...props}>
      {props.children}
    </a>
  )
}
