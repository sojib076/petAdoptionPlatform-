import Header from "@/Pages/HeaderFooter/Header";
import Sidenavbar from "@/components/ui/Sidenavbar";
import { Outlet } from "react-router-dom";

const Dashboardlayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex lg:flex-row flex-col ">
        <div className="">
          <Sidenavbar></Sidenavbar>
        </div>
        <div className=" lg:w-[90%] ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboardlayout;
