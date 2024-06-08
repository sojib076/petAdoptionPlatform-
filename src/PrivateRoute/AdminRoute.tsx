import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loadingcom from '@/components/Loading/Loading';

interface UserRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<UserRouteProps> = ({ children }) => {
  const [isUser, setIsUser] = useState<boolean | null>(null);
  const email = localStorage.getItem('userEmail');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (email) {
          const cleanedEmail = email.replace(/["']/g, ''); 
          console.log(`Email found in localStorage: ${cleanedEmail}`);
          const response = await axios.post(`${process.env.data_url}/users/${cleanedEmail}`);
          console.log('API response:', response);
          const userRole = response?.data?.data?.role;
          console.log('userRole:', userRole);
          console.log('userRole:', userRole);
          if (userRole === 'admin') {
            setIsUser(true);
          } else {
            setIsUser(false);
          }
        } else {
          console.log('No email found in localStorage');
          setIsUser(false);
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setIsUser(false);
      }
    };
  
    fetchData();
  }, [email]);
  

  if (isUser === null) {
    return <Loadingcom />;
  }

  if (isUser) {
    return <>{children}</>;
  }

  return <div>Unauthorized</div>;
};

export default AdminRoute;
