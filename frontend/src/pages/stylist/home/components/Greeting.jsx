import { Bell } from "lucide-react";
import React from "react";
import { ModeToggle } from "../../../../components/ModeToggle";

const Greeting = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div>
          <img
            src="https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg"
            alt=""
            className="h-14 w-14 object-cover rounded-full"
          />
        </div>

        <div>
          <h1 className="text-sm font-semibold text-/60">Hi {"David"},</h1>
          <p className="text-lg font-semibold">Good Morning</p>
        </div>
      </div>
      <div className="p-2 ">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Greeting;
