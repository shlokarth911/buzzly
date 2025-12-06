import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavigationMenu from "../ui/navigatioon-menu";
import {
  ChartColumn,
  ClipboardClock,
  House,
  Scissors,
  User,
} from "lucide-react";

const StylistLayout = () => {
  const iconSize = 22;

  const items = [
    { key: "home", label: <House size={iconSize} />, path: "/stylist/home" },
    {
      key: "upcoming-appointments",
      label: <ClipboardClock size={iconSize} />,
      path: "/stylist/appointments",
    },
    {
      key: "salon",
      label: <Scissors size={iconSize} />,
      path: "/stylist/salon",
    },
    {
      key: "analytics",
      label: <ChartColumn size={iconSize} />,
      path: "/stylist/analytics",
    },
    {
      key: "profile",
      label: <User size={iconSize} />,
      path: "/stylist/profile",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const currentItem =
    items.find((item) => item.path === location.pathname) || items[0];

  return (
    <div>
      <Outlet />

      <div className="fixed bottom-1 p-2 w-full">
        <NavigationMenu
          activeKey={currentItem.key}
          onChange={(key) => {
            const selected = items.find((i) => i.key === key);
            if (selected) navigate(selected.path);
          }}
          items={items}
        />
      </div>
    </div>
  );
};

export default StylistLayout;
