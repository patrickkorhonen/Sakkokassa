import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import React from 'react'

const DeleteMinutes = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <button className="col-start-3 leading-tight text-lg rounded-b-lg bg-red-500 mr-1 hover:bg-red-600">Poista sakkoa</button>
      </DialogTrigger>
      <DialogContent className="w-72">
        <DialogHeader>
          <DialogTitle>Vähennä minuutteja</DialogTitle>
        </DialogHeader>
        <div className="py-2">
          <div className="flex justify-center">
            <Input type="number" id="minuutit" placeholder="0" className="w-20 text-center text-2xl" />
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-red-500" type="submit">Vähennä</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteMinutes