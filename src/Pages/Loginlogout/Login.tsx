import  { useState } from "react";
import { setUserInfo } from "@/context/features/User/userLoginSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Login() {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    try {
      const response = await axios.post(`${process.env.data_url}/users/login`, { user: user });
      navigate('/dashboard');
      dispatch(setUserInfo({ name: response.data.data.name, email: response.data.data.email }));
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex lg:flex-row flex-col-reverse min-h-screen bg-gray-100 gap-10 lg:gap-0 ">
      <div className="w-full max-w-md m-auto bg-white rounded-lg shadow-lg p-5">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Login Now</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Email" />
          </div>
          <div className="mb-4">
            <input type="password" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Password" />
          </div>
          <button className="w-full py-2 bg-[#F8A7B9] text-white rounded-md">Login</button>
        </form>
      </div>
      <div className="w-full max-w-md m-auto bg-white rounded-lg shadow-lg p-5">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Welcome</h1>
        <p className="text-center text-gray-500">If you don't have an account, please Sign Up</p>
        <Link to={'/signup'}>
          <button className="w-full py-2 mt-4 bg-[#F8A7B9] text-white rounded-md">SIGN IN</button>
        </Link>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10"
          >
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Login;
