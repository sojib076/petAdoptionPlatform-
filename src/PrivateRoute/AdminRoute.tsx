
import Loadingcom from '@/components/Loading/Loading';
import useAdminStatus from '@/Utiles/useAdminStatus';

interface UserRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<UserRouteProps> = ({ children }) => {
  const isAdmin = useAdminStatus();
 
  if (isAdmin === null) {
    return <Loadingcom />;
  }

  if (isAdmin) {
    return <>{children}</>;
  }

  return <div>Unauthorized</div>;
};

export default AdminRoute;
