import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from "@mui/base/Button"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "@/utils/utils"

// setup variants
const vmButtonVariants = cva(
  // global styles
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-800",
  {
    variants: {
      // variant styles
      variant: {
        default:
          "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// setup props
export interface ButtonProps extends BaseButtonProps, VariantProps<typeof vmButtonVariants> {
  asChild?: boolean
}

// setup component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const Comp = asChild ? BaseButton : "button"
    return <Comp className={cn(vmButtonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)

// setup display name
Button.displayName = "VMButton"

// export
export { Button, vmButtonVariants }
