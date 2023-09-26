import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/home";
import Lo from "../pages/Lo";
import LoCreate from "../pages/Lo/Create/index";
// import LoCreate from "../pages/Lo/Create";
// import LoEdit from "../pages/Lo/Edit";
// import LoShow from "../pages/Lo/lo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/oa",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Lo />,
      },
      {
        path: "novo",
        element: <LoCreate />,
      },
    //   {
    //     path: ":id",
    //     element: <Outlet />,
    //     children: [
    //       {
    //         index: true,
    //         element: <LoShow />,
    //       },
    //       {
    //         path: "editar",
    //         element: <LoEdit />,
    //       },
    //     ],
    //   },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}