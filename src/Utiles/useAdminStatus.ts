import axios from "axios";
import { useState, useEffect } from "react";

const useAdminStatus = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const email = localStorage.getItem("userEmail");
      if (email) {
        const cleanedEmail = email.replace(/["']/g, '');
        try {
          const response = await axios.post(`${process.env.data_url}/users/${cleanedEmail}`);
          const userRole = response?.data?.data?.role;
          setIsAdmin(userRole === 'admin');
        } catch (error) {
          console.error('Error fetching user role:', error);
          setIsAdmin(false); // Optionally set to false on error
        }
      } else {
        setIsAdmin(false); // Optionally set to false if no email is found
      }
    };

    fetchUserRole();
  }, []);

  return isAdmin;
};

export default useAdminStatus;
