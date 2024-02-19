import React from "react";
import AddMinutes from "@/components/ui/addMinutes";
import DeleteMinutes from "@/components/deleteMinutes";

const page = () => {
  return (
    <div className="h-[calc(100dvh)] sm:h-screen flex flex-col bg-black">
      <p className="text-center py-6 text-5xl font-black text-white drop-shadow-lg">
        SAKKOKASSA
      </p>
      <div className="mx-4 mb-6 grow">
        <div className="grid grid-rows-3 gap-6 h-full">
          <div className="rounded-lg shadow-lg bg-slate-300">
            <div className="text-center font-semibold h-full flex flex-col">
              <div className="grid grid-cols-4">
                <p className="col-span-1 text-xl text-white bg-slate-500 rounded-tl-lg rounded-br-lg w-max font-medium p-3">
                  Kapu
                </p>
                <DeleteMinutes />
                <AddMinutes id="1" />
              </div>
              <div className="grow flex flex-col justify-center">
                <p className="text-2xl text-slate-500">Sakko</p>
                <p className="text-5xl">0 min</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg bg-slate-300">
            <div className="text-center font-semibold h-full flex flex-col">
              <div className="grid grid-cols-4">
                <p className="col-span-1 text-xl text-white bg-slate-500 rounded-tl-lg rounded-br-lg w-max font-medium p-3">
                  Nikke
                </p>
                <DeleteMinutes />
                <AddMinutes id="2" />
              </div>
              <div className="grow flex flex-col justify-center">
                <p className="text-2xl text-slate-500">Sakko</p>
                <p className="text-5xl">0 min</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg bg-slate-300">
            <div className="text-center font-semibold h-full flex flex-col">
              <div className="grid grid-cols-4">
                <p className="col-span-1 text-xl text-white bg-slate-500 rounded-tl-lg rounded-br-lg w-max font-medium p-3">
                  Pate
                </p>
                <DeleteMinutes />
                <AddMinutes id="3" />
              </div>
              <div className="grow flex flex-col justify-center">
                <p className="text-2xl text-slate-500">Sakko</p>
                <p className="text-5xl">0 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
