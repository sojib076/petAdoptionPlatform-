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
import View from "./Pages/Dashboard/View.tsx";
import Users from "./Pages/Dashboard/Admin/Users.tsx";

// Define routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/petlist", element: <PetList /> },
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
    element: <Dashboardlayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      {
        path: "/dashboard/view",
        element: <View></View>,
      },
      {
        path: "/dashboard/users",
        element: <Users></Users>,
      },
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
