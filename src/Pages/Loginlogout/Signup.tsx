import { Link } from "react-router-dom";
import axios from 'axios';
import { setUserInfo } from "@/context/features/User/userLoginSlice";
import { useDispatch } from "react-redux";


const Signup = () => {
const dispatch = useDispatch();
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const user = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      location: e.target[3].value,
    } 
    try {
      const response = await axios.post('http://localhost:5000/api/v1/users/signup', {
        user: user
      });
      
      dispatch(setUserInfo({ name: response.data.data.user.name, email: response.data.data.user.email }));
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

    return (
        <div className="flex min-h-screen bg-gray-100">
        <div className="w-full max-w-md m-auto bg-white rounded-lg shadow-lg p-5">
          <h1 className="text-3xl font-semibold text-center text-gray-700">Welcome Back!</h1>
          <p className="text-center text-gray-500">To keep connected with us please login with your personal info</p>
         <Link to={'/login'}> <button className="w-full py-2 mt-4 bg-green-500 text-white rounded-md"> Login </button></Link>
        </div>
        <div className="w-full max-w-md m-auto bg-white rounded-lg shadow-lg p-5">
          <h1 className="text-3xl font-semibold text-center text-gray-700">Create Account</h1>
          <p className="text-center text-gray-500">or use your email for registration:</p>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Name" />
            </div>
            <div className="mb-4">
              <input type="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Email" />
            </div>
            <div className="mb-4">
              <input type="password" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Password" />
            </div>
            <div className="mb-4">
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Location" />
            </div>
            <button className="w-full py-2 bg-green-500 text-white rounded-md">SIGN UP</button>
          </form>
        </div>
      </div>
    );
};

export default Signup;