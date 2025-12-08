import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

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

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const statusSubmitHandler = (e) => {
    e.preventDefault();
    console.log(status);
  };

  const [status, setStatus] = useState("active");

  return (
    <div className="mt-10">
      <h1 className="text-2xl pb-5 border-b border-neutral-700 font-bold">
        DashBoard
      </h1>

      {/* Number of appointments */}

      <div className="mt-5 flex gap-3">
        <Card className="w-full h-full gap-3">
          <CardHeader>
            <CardTitle className="text-neutral-300">
              Upcoming Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl">{45}</p>
          </CardContent>
        </Card>
        <Card className="w-full h-full gap-3">
          <CardHeader>
            <CardTitle className="text-neutral-300">
              Completed Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl">{24}</p>
          </CardContent>
        </Card>
      </div>

      {/* Current status */}
      <div className="mt-5">
        <Item variant="muted" className="rounded-xl">
          <ItemContent>
            <ItemTitle className="text-neutral-300  text-lg">
              Current Status
            </ItemTitle>
            <ItemDescription>
              {status === "active" ? (
                <Badge variant="default" className="bg-emerald-500 text-white">
                  Active
                </Badge>
              ) : (
                <Badge variant="default" className="bg-red-500 text-white">
                  Inactive
                </Badge>
              )}
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Dialog>
              <DialogTrigger>
                <Button variant="outline" size="lg">
                  Change Status
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Change your current status</DialogTitle>
                  <form onSubmit={statusSubmitHandler} className="mt-6">
                    <RadioGroup
                      defaultValue="active"
                      value={status}
                      onValueChange={setStatus}
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="active" id="r1" />
                        <Label htmlFor="r1" className="text-lg">
                          Active
                        </Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="inactive" id="r2" />
                        <Label className="text-lg" htmlFor="r2">
                          Inactive
                        </Label>
                      </div>
                    </RadioGroup>

                    <DialogFooter className="flex gap-3 mt-5">
                      <DialogClose>
                        <Button variant="outline" className="w-full">
                          Cancel
                        </Button>
                      </DialogClose>
                      <DialogClose>
                        <Button type="submit" className="w-full">
                          Save changes
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </form>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </ItemActions>
        </Item>
      </div>
    </div>
  );
};

export default Dashboard;
