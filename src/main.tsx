import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "aos/dist/aos.css";
import Home from "./Pages/Home/Home.tsx";
import Mainlayout from "./Layout/Mainlayout.tsx";
import PetList from "./Pages/PetList/PetList.tsx";
import Petdetails from "./Pages/PetList/Petdetails.tsx";
import { Provider } from "react-redux";
import store from "./context/features/store.tsx";
import Dashboardlayout from "./Layout/Dashboardlayout.tsx";
import Dashboard from "./Pages/Dashboard/Dashboard.tsx";
import Users from "./Pages/Dashboard/Admin/Users.tsx";
import Petlists from "./Pages/Dashboard/Admin/Petlists.tsx";
import AdminPetDetails from "./Pages/Dashboard/Admin/AdminPetDetails.tsx";
import UserAddPet from "./Pages/Dashboard/User/UserAddPet.tsx";
import AdopitionRequest from "./Pages/Dashboard/User/AdopitionRequest.tsx";
import UserPetList from "./Pages/Dashboard/User/UserPetList.tsx";
import UserListofApply from "./Pages/Dashboard/User/UserListofApply.tsx";
import Login from "./Pages/Loginlogout/Login.tsx";
import Signup from "./Pages/Loginlogout/Signup.tsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.tsx";
import UserRoute from "./PrivateRoute/UserRoute.tsx";
import AdminRoute from "./PrivateRoute/AdminRoute.tsx";


// Define routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/petlist", element: <PetList /> },
      {path:"/login",element:<Login></Login>},
      { path: "/signup", element: <Signup />},
      {
        path: "/petdetails/:petid",
        loader: ({ params }: any) =>
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.petid}`,
          ).then((res) => res.json()),
        element: <Petdetails />,
      },
      
    ],
  },
  {
    path: "/dashboard",
    element:( <PrivateRoute> <Dashboardlayout/>, </PrivateRoute>),
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      {
        path: "/dashboard/users",
        element:(<AdminRoute> <Users></Users>  </AdminRoute>)
      },
      {
        path: "/dashboard/pets",
        element:( <AdminRoute ><Petlists></Petlists> </AdminRoute > )
      },
      {
        path: "/dashboard/petdetails/:petid",
        loader: ({ params }: any) =>
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.petid}`,
          ).then((res) => res.json()),
        element:(<AdminRoute><AdminPetDetails /></AdminRoute> )
      },
      {
        path:"/dashboard/useraddpet",
        element:( <UserRoute> <UserAddPet/>, </UserRoute>),
      },
      {
        path:"/dashboard/adoptionreq",
        element:(<UserRoute> <AdopitionRequest></AdopitionRequest></UserRoute>  )
      },
      {
        path:"/dashboard/userpetlist",
        element:(< UserRoute> <UserPetList></UserPetList> </UserRoute> )
      },
      {
        path:"/dashboard/listofapply",
        element: (<UserRoute> <UserListofApply></UserListofApply></UserRoute> )
      }
    ],
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>,
);
