import { useState } from "react";
import { Nav } from "./nav";
import { ChevronRight, Inbox, Users,BadgePlus, Cat, ScrollText, ListChecks } from "lucide-react";
import { Button } from "./button";

const Sidenavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const admin = true;
  return (
    <div className="relative min-w-[80px] lg:min-h-[100vh] border-r px-3  lg:pt-10">
      <div className="my-10">
        <Button
          variant="secondary"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="lg:absolute lg:right-[-20%]  right-20 lg:top-5  hidden lg:block  "
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            to: "/dashboard",
            icon: Inbox,
            variant: "default",
          },
          admin && {
            title: "Users",
            to: "/dashboard/users",
            icon: Users,
            variant: "default",
          },
          {
            title: "All Pets",
            to: "/dashboard/pets",
            icon: Inbox,
            variant: "default",
          },
          {
            title: "Add Pet ",
            to: "/dashboard/useraddpet",
            icon: BadgePlus,
            variant: "default",
          },
          {
            title: " Your Added Pets ",
            to: "/dashboard/userpetlist",
            icon: Cat,
            variant: "default",
          },
          {
            title: " Adoption Requested ",
            to: "/dashboard/adoptionreq",
            icon: ScrollText,
            variant: "default",
          },
          {
            title: "List Of Apply ",
            to: "/dashboard/listofapply",
            icon: ListChecks,
            variant: "default",
          },
        
        ]}
      />
    </div>
  );
};

export default Sidenavbar;
