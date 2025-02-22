import React from "react";
import { Button } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FilePlus, Briefcase, UserCircle } from "lucide-react";

const BottomNav = ({ setActivePage }) => {
  const location = useLocation();

  const navItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      path: "/dashboard",
    },
    {
      name: "Post Job",
      icon: <FilePlus className="w-5 h-5" />,
      path: "/post-job",
    },
    {
      name: "Manage Jobs",
      icon: <Briefcase className="w-5 h-5" />,
      path: "/manage-jobs",
    },
    {
      name: "Profile",
      icon: <UserCircle className="w-5 h-5" />,
      path: "/profile",
    },
  ];

  return (
    <nav className="fixed h-16 z-50 bottom-0 w-full bg-white border-t border-gray-200 px-2">
      <div className="max-w-lg mx-auto h-full">
        <div className="flex justify-around items-center h-full">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.name}
                as={Link}
                to={item.path}
                onClick={() => setActivePage(item.name)}
                className={`flex flex-col items-center min-w-[4.5rem] h-14 gap-1 p-2 rounded-lg transition-all
                  ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "bg-transparent text-gray-500 hover:bg-gray-100"
                  }`}
              >
                {item.icon}
                <span className="text-xs font-medium">{item.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
