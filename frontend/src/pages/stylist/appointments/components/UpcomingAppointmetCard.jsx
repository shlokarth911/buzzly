import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const UpcomingAppointmetCard = ({ appointmentData }) => {
  return (
    <Card className="flex flex-col rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-neutral-300">
          {appointmentData.name}
        </CardTitle>
        <CardDescription className="text-base text-neutral-300">
          {appointmentData.service}
        </CardDescription>
      </CardHeader>
      <CardContent className="grow grid gap-2 py-3 border-y border-neutral-500">
        <div className="flex items-center justify-between text-sm ">
          <span className="font-medium">Date:</span>
          <span>{appointmentData.date}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Time:</span>
          <span>{appointmentData.time}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-semibold ">Total Price:</span>
          <span className="text-xl font-bold text-primary">
            ${appointmentData.price}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-3 pt-4">
        <Button
          className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white"
          variant="default"
        >
          Completed
        </Button>
        <Button
          className="flex-1 bg-red-500 hover:bg-red-600 text-white"
          variant="destructive"
        >
          <CancelDialog appointmentData={appointmentData} />
        </Button>
      </CardFooter>
    </Card>
  );
};

const CancelDialog = ({ appointmentData }) => {
  const [appointmentDataState, setAppointmentDataState] =
    useState(appointmentData);

  const handleAppointmentCancellation = () => {
    console.log("Canceled Appointment of", appointmentDataState.name);
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full">Cancel</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription className="text-sm my-2">
            This action cannot be undone. Click confirm to cancel the
            appointment
          </DialogDescription>
          <DialogFooter className="flex gap-3">
            <DialogClose>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose>
              <Button
                onClick={handleAppointmentCancellation}
                variant="destructive"
                className="w-full"
              >
                Confirm
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpcomingAppointmetCard;
