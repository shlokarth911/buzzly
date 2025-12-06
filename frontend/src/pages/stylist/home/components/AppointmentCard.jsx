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
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppointmentCard = ({ setOpen }) => {
  return (
    <Card className="gap-3">
      <CardHeader>
        <CardTitle>
          <h1 className="text-xl">Jhon Doe</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-3">HairCut</p>
        <p className="text-neutral-400">Time: 10:00 AM</p>
        <p className="text-neutral-400">Date: 2022-01-01</p>
      </CardContent>

      <CardFooter>
        <Button
          onClick={() => setOpen(false)}
          variant="outline"
          className="rounded-full w-full"
        >
          Close
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AppointmentCard;
