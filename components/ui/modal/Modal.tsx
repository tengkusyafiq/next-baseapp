"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/Dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { twMerge } from "tailwind-merge"

const modal = cva(
  [
    // general styles
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface ModalProps extends VariantProps<typeof modal> {
  className?: string | undefined
  trigger?: React.ReactNode | undefined
  title?: string | undefined
  description?: string | undefined
  modalContent?: React.ReactNode | undefined
  closeContent?: React.ReactNode | undefined
}

/**
 * pass trigger component as 'trigger' prop
 * pass dialog content as content
 */
export function Modal({ trigger, title, description, modalContent, closeContent, className, ...props }: ModalProps) {
  // set default for trigger
  trigger = trigger ?? (
    <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
      {title ?? "Default Title"}
    </button>
  )
  // set default for content
  modalContent = modalContent ?? <> </>

  return (
    <div className={twMerge(modal({ className }))} {...props}>
      <Dialog.Root>
        {/* trigger components */}
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
        {/* dialog overlay */}
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">{title ?? "Default Title"}</Dialog.Title>
            <Dialog.Description className="text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal">
              {description ?? "Default description"}
            </Dialog.Description>
            {modalContent}
            {closeContent ? (
              <div className="mt-[25px] flex justify-end">
                <Dialog.Close asChild>{closeContent}</Dialog.Close>
              </div>
            ) : null}
            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default Modal
