import { useState } from "react";
import { Nav } from "./nav";
import { ChevronRight, Inbox, Users } from "lucide-react";
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
            label: "128",
            to: "/dashboard/users",
            icon: Users,
            variant: "default",
          },
        ]}
      />
    </div>
  );
};

export default Sidenavbar;
