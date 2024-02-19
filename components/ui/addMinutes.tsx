import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React from "react";
import { useState } from "react";

const AddMinutes = (props: any) => {
 
    

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
        <DialogFooter>
          <Button type="submit">Lisää</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddMinutes;
