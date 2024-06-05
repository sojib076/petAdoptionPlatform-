import { setUserInfo } from "@/context/features/User/userLoginSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function Login() {

  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {

    e.preventDefault();
    const user = {
      email:  e.target[0].value,
      password: e.target[1].value,
    } 
   
  
    try {
      const response = await axios.post('http://localhost:5000/api/v1/users/login', {user: user});
    
      dispatch(setUserInfo({ name: response.data.data.name, email: response.data.data.email }));

  
  
    } catch (error) {
      console.error('Signup failed:', error);
    }


  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg shadow-lg p-5">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Login Now </h1>
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
        <h1 className="text-3xl font-semibold text-center text-gray-700">Welcome </h1>
        <p className="text-center text-gray-500"> if you don't have any account please Sign Up  </p>
        <Link to={'/signup'}><button className="w-full py-2 mt-4 bg-[#F8A7B9] text-white rounded-md">SIGN IN</button></Link>
      </div>
    </div>
  );
}

export default Login;
