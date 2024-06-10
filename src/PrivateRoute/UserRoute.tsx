
import Loadingcom from '@/components/Loading/Loading';
import useAdminStatus from '@/Utiles/useAdminStatus';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface UserRouteProps {
  children: React.ReactNode;
}
const UserRoute: React.FC<UserRouteProps> = ({ children }) => {

  const [isUser, setIsUser] = useState<boolean | null>(null);
  console.log(isUser);
  useEffect(() => {
    const fetchUserRole = async () => {
      const email = localStorage.getItem('userEmail');
      const token = localStorage.getItem('token');
      if (email && token) {
        const cleanedEmail = email.replace(/["']/g, '');
        try {
          const response = await axios.get(`${process.env.data_url}/users/${cleanedEmail}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userRole = response?.data?.data?.role;
          console.log(userRole);
          setIsUser(userRole === 'user');
        } catch (error) {
          console.error('Error fetching user role:', error);
          setIsUser(false);
        }
      } else {
        setIsUser(false);
      }
    };
    fetchUserRole();

  }, []);  

  if (isUser === null) {
    return <Loadingcom />;
  }

  if (isUser) {
    return <>{children}</>;
  }

  return <div>Unauthorized</div>;
};

export default UserRoute;
