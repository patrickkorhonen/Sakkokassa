"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";

const AddMinutes = (props: any) => {
 
  const handle = async (AddedMinutes: any) => {
    if (AddedMinutes && Number(AddedMinutes.value) > 0) {
        const sum = Number(AddedMinutes.value) + Number(props.minutes)
        await fetch("/api/updateMinutes", {
          method: "POST",
          body: JSON.stringify({id: props.id, newMinutes: sum})
        })
        window.location.reload()
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" bg-slate-800 leading-tight text-lg rounded-b-lg text-slate-200 mr-1 hover:bg-slate-700">
          Lisää sakkoa
        </button>
      </DialogTrigger>
      <DialogContent className="w-72">
        <DialogHeader>
          <DialogTitle>Lisää minuutteja</DialogTitle>
        </DialogHeader>
        <div className="py-2">
          <div className="flex justify-center">
            <Input
              type="number"
              id="minuutit"
              placeholder="0"
              className="w-20 text-center text-2xl"
            />
          </div>
        </div>
        <DialogClose>
        <DialogFooter className="bg-black text-white text-xl rounded-md p-3" onClick={() => handle(document.getElementById("minuutit"))}>Lisää
        </DialogFooter>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default AddMinutes;
