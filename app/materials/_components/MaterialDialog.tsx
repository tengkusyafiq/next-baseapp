import { Button } from "@/components/ui/button/Button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog/Dialog"
import { linkList } from "../[id]/page"
import { MaterialType } from "../_types/MaterialType"

export default function MaterialDialog({ material }: { material: MaterialType }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="my-0 inline-flex h-8 items-center rounded-full bg-gray-100
            px-3 py-0 text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        >
          Learn now (~{material.total_eta} minutes)
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{material.title}</DialogTitle>
          <DialogDescription>{material.description}</DialogDescription>
        </DialogHeader>
        {linkList(material)}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">OK</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
