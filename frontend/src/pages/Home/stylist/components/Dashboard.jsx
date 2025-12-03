import React from "react";

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

import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
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
              <Badge variant="default" className="bg-emerald-500 text-white">
                Active
              </Badge>
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="lg">
              Change Status
            </Button>
          </ItemActions>
        </Item>
      </div>
    </div>
  );
};

export default Dashboard;
