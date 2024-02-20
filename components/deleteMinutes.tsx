"use client"
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

const DeleteMinutes = (props: any) => {

  const handle = async (SubstractedMinutes: any) => {
    if (SubstractedMinutes && Number(SubstractedMinutes.value) > 0) {
        const sub = Number(props.minutes) - Number(SubstractedMinutes.value)
        if (sub <= 0) {
        await fetch("/api/updateMinutes", {
          method: "POST",
          body: JSON.stringify({id: props.id, newMinutes: 0})
        })
      } else {
        await fetch("/api/updateMinutes", {
          method: "POST",
          body: JSON.stringify({id: props.id, newMinutes: sub})
        })
      }
      window.location.reload() 
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
      <button className="col-start-3 leading-tight text-slate-100 text-lg rounded-b-lg bg-red-500 mr-1 hover:bg-red-600">Poista sakkoa</button>
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
        <DialogFooter className="bg-red-500 text-slate-100 text-xl font-medium rounded-md p-3 text-center" onClick={() => handle(document.getElementById("minuutit"))}>Vähennä
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteMinutes