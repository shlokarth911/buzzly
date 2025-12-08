import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

import { Button } from "@/components/ui/button";
import AppointmentCard from "./AppointmentCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const UpcomingAppointments = () => {
  const [open, setOpen] = useState(false);

  const cardRef = useRef(null);

  useGSAP(() => {
    if (open) {
      gsap.to(cardRef.current, {
        opacity: 1,
        duration: 0.2,
        pointerEvents: "auto",
      });
    } else {
      gsap.to(cardRef.current, {
        opacity: 0,
        duration: 0.2,
        pointerEvents: "none",
      });
    }
  }, [open]);

  return (
    <div className="mt-10">
      <h1 className="text-2xl pb-5 border-b border-neutral-700 font-bold">
        Upcoming Appointments
      </h1>

      <div className="flex flex-col gap-5 mt-5">
        {/* Sample Card */}
        <div>
          <Card>
            <div className="flex w-full justify-between">
              <CardHeader className="w-full">
                <CardTitle>Jhone Doe</CardTitle>
                <CardDescription>HairCut</CardDescription>
              </CardHeader>
              <CardContent className="w-full">
                <p>Time: 10:00 AM</p>
                <p>Date: 2022-01-01</p>
              </CardContent>
            </div>
            <CardFooter className="flex justify-between gap-2">
              <Button
                onClick={() => setOpen(true)}
                className="w-1/2"
                variant="outline"
              >
                View Details
              </Button>
              <Button className="w-1/2" variant="destructive">
                <CancelDialog />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div
        ref={cardRef}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center h-full bg-black/50 opacity-0 pointer-events-none"
      >
        <div className="w-[90%] ">
          <AppointmentCard setOpen={setOpen} />
        </div>
      </div>
    </div>
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

export default UpcomingAppointments;
