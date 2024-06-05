

import { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdMenuOpen } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Header = () => {  
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
  const Email = localStorage.getItem("userEmail");
  const isLoggedIn = useSelector((state:any) => state.userLogin.loggedIn);
  

  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  useEffect(() => {
    setUserEmail(Email)
  }, [isLoggedIn])
   const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUserEmail(null);
  };

  return (
    <div>
      <div className="sticky  top-0 z-40">
        <nav className="w-full  p-5 bg-[#F8A7B9]  md:flex md:items-center md:justify-between  ">
          <div className="flex justify-between items-center ">
            <span className="text-2xl  cursor-pointer">
              {/* <img className="h-10 inline" src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" alt="Tailwind Logo" /> */}
              loading...
            </span>

            <span
              className="text-3xl cursor-pointer mx-2 md:hidden block text-black hover:animate-spin  "
              onClick={toggleMenu}
            >
              {menuOpen ? <MdMenuOpen /> : <BiMenuAltLeft />}
            </span>
          </div>

          <ul
            className={`md:flex lg:hidden  z-40  transform
          md:items-center ${menuOpen ? "opacity-100 top-[72px]" : "opacity-0 top-[-300px]"} absolute 
        bg-[#F8A7B9] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 transition-all ease-in duration-500`}
          >
            <li className="mx-4 my-6 md:my-0 menuhover text-xl  ">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-4 my-6 md:my-0 menuhover ">
              <Link className="text-xl  " to="/login">
                Login
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0 menuhover text-xl">
              <Link to="/petlist"> Pet List</Link>
            </li>

            <li className="mx-4 my-6 md:my-0 menuhover">
              {userEmail ? (
                <Link className="t" to="/dashboard/">
                 
                  Dashboard
                </Link>
              ) : (
                <Link className="text-xl  " to="/adlogin">
                 
                  Login
                </Link>
              )}
            </li>
          </ul>

          {/*  this is for desktop */}

          <ul
            className={`md:flex md:items-center  hidden lg:ml-[25%] lg:gap-5 md:ml-[18%] transform '} 
        absolute bg-[#F8A7B9] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500`}
          >
            <li className="mx-4 my-6 md:my-0 menuhover ">
              <Link className="text-xl     " to="/">
                Home
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0 menuhover">
              {
                userEmail ? (
                  <Link className="text-xl hover:text-cyan-500 duration-500" to="/" onClick={handleLogout} >
                    Logout
                  </Link>
                ) : (
                  <Link className="text-xl hover:text-cyan-500 duration-500" to="/login">
                    Login
                  </Link>
                )
              }
            </li>


            <li className="mx-4 my-6 md:my-0  menuhover  ">
              <Link className=" text-xl " to="/dashboard/">
                Dashboard
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0 menuhover">
              <Link className="text-xl  " to="/petlist">
                Pet List
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
