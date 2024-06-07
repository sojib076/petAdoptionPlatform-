
import { Navigate } from 'react-router-dom';

interface UserRouteProps {
     children: React.ReactNode;
   }
const PrivateRoute:React.FC<UserRouteProps>  = ({children}) => {
     const isAuthenticated = !!localStorage.getItem('userEmail');
    
 
     return isAuthenticated ? children : <Navigate to="/login" />;
    
};

export default PrivateRoute;