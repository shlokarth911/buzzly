import React from "react";
import UpcomingAppointmetCard from "./components/UpcomingAppointmetCard";

const Appointments = () => {
  const upcomingAppointmentData = [
    {
      name: "Jhone Doe",
      service: "HairCut",
      date: "2022-01-01",
      time: "10:00 AM",
      price: 100,
    },

    {
      name: "Sara Json",
      service: "Styling",
      date: "2022-01-02",
      time: "10:00 AM",
      price: 150,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Appointments</h1>
      <div className="mt-5">
        <h2 className="text-xl font-semibold border-b border-b-white/30 pb-2">
          Upcoming Appointments
        </h2>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcomingAppointmentData.map((appointmentData) => (
            <UpcomingAppointmetCard
              key={appointmentData.name}
              appointmentData={appointmentData}
            />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-semibold border-b border-b-white/30 pb-2">
          Completed Appointments
        </h2>
      </div>
    </div>
  );
};

export default Appointments;
