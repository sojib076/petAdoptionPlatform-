
import UserDashboard from "./User/UserDashboard";

import AdminDashboard from "./Admin/AdminDashboard";
import Loadingcom from "@/components/Loading/Loading";
import useAdminStatus from "@/Utiles/useAdminStatus";

const Dashboard = () => {

  const isAdmin = useAdminStatus();

  if (isAdmin === null || isAdmin === undefined) {
    return <Loadingcom />;
  }

  return (
    <div>
      
      {isAdmin ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
};

export default Dashboard;
