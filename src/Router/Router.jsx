import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayouts from "../MainLayouts/MainLayouts";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";


export const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayouts></MainLayouts>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      },
    ]
  }
])