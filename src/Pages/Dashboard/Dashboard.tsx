import axios from "axios";
import UserDashboard from "./User/UserDashboard";
import { useState, useEffect } from "react";
import AdminDashboard from "./Admin/AdminDashboard";
import Loadingcom from "@/components/Loading/Loading";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>();

  useEffect(() => {
    const fetchUserRole = async () => {
      const email = localStorage.getItem("userEmail");
      if (email) {
        const cleanedEmail = email.replace(/["']/g, ''); 
        console.log(`Email found in localStorage: ${cleanedEmail}`);
        try {
          const response = await axios.post(`http://localhost:5000/api/v1/users/${cleanedEmail}`);
          console.log('API response:', response);
          const userRole = response?.data?.data?.role;
          setIsAdmin(userRole === 'admin');
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      }
    };

    fetchUserRole();
  }, []);
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
