
import axios from "axios";
import { useState, useEffect } from "react";


const useAdminStatus = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const email = localStorage.getItem("userEmail");
      const token = localStorage.getItem("token");
    

      if (email && token) {
        const cleanedEmail = email.replace(/["']/g, '');
        try {
          const response = await axios.get(
            `${process.env.data_url}/users/${cleanedEmail}`,
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );
          const userRole = response?.data?.data?.role;
          setIsAdmin(userRole === 'admin');
        } catch (error) {
          console.error('Error fetching user role:', error);
          setIsAdmin(null); 
        }
      } else {
        setIsAdmin(false); 
      }
    };

    fetchUserRole();
  }, []);



  return isAdmin;
};

export default useAdminStatus;
