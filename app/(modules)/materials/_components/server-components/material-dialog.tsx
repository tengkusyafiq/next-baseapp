import { linkList } from "@/app/(modules)/materials/[id]/page"
import { TMaterial } from "@/app/(modules)/materials/_models/t-material"
import { Button } from "@/components/ui/button/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/dialog"

export default function MaterialDialog({ material }: { material: TMaterial }) {
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
