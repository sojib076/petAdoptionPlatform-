import { useState } from "react";
import { Nav } from "./nav";
import { ChevronRight, Inbox, Users, BadgePlus, Cat, ScrollText, ListChecks, LucideIcon } from "lucide-react";
import { Button } from "./button";
import useAdminStatus from "../../Utiles/useAdminStatus";

const Sidenavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isAdmin = useAdminStatus(); 


  if (isAdmin === null) {
    return null;
  }

  const navLinks: {
    title: string;
    to: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    adminOnly?: boolean;
    userOnly?: boolean;
  }[] = [
    {
      title: "Dashboard",
      to: "/dashboard",
      icon: Inbox,
      variant: "default",
    },
    {
      title: "Users",
      to: "/dashboard/users",
      icon: Users,
      variant: "default",
      adminOnly: true,
    },
    {
      title: "All Pets",
      to: "/dashboard/pets",
      icon: Inbox,
      variant: "default",
      adminOnly: true,
    },
    {
      title: "Add Pet",
      to: "/dashboard/useraddpet",
      icon: BadgePlus,
      variant: "default",
      userOnly: true,
    },
    {
      title: "Your Added Pets",
      to: "/dashboard/userpetlist",
      icon: Cat,
      variant: "default",
      userOnly: true,
    },
    {
      title: "Adoption Requested",
      to: "/dashboard/adoptionreq",
      icon: ScrollText,
      variant: "default",
      userOnly: true,
    },
    {
      title: "List Of Apply",
      to: "/dashboard/listofapply",
      icon: ListChecks,
      variant: "default",
      userOnly: true,
    },
  ];

  const filteredLinks = navLinks.filter(link => {
    // Check for null or undefined links
    if (!link) return false;

    // Include the link if it is neither adminOnly nor userOnly
    // Include the link if it is adminOnly and the user is an admin
    // Include the link if it is userOnly and the user is not an admin
    return (!link.adminOnly && !link.userOnly) ||
           (link.adminOnly && isAdmin) ||
           (link.userOnly && !isAdmin);
  });
  
  return (
    <div className="relative min-w-[80px] lg:min-h-[100vh] border-r px-3 lg:pt-10">
      <div className="my-10">
        <Button
          variant="secondary"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="lg:absolute lg:right-[-20%] right-20 lg:top-5 hidden lg:block"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={filteredLinks}
      />
    </div>
  );
};

export default Sidenavbar;
