"use client"

import * as Dialog from "@radix-ui/react-dialog"
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
    <button className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA7 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
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
          <Dialog.Overlay className="fixed inset-0 bg-blackA9 data-[state=open]:animate-overlayShow" />
          <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
            <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">{title ?? "Default Title"}</Dialog.Title>
            <Dialog.Description className="mb-5 mt-[10px] text-[15px] leading-normal text-mauve11">
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
                className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
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
