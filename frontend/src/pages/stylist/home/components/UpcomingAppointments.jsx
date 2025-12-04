import React from "react";
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

const UpcomingAppointments = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl pb-5 border-b border-neutral-700 font-bold">
        Upcomming Appointments
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
              <Button className="w-1/2" variant="outline">
                View Details
              </Button>
              <Button className="w-1/2" variant="destructive">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
