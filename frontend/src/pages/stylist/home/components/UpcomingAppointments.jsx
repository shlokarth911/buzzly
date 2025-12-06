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
                Cancel
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

export default UpcomingAppointments;
