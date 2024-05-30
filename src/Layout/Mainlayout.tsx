import { Outlet } from "react-router-dom";
import Header from "../Pages/HeaderFooter/Header";
import Footer from "../Pages/HeaderFooter/Footer";

const Mainlayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
