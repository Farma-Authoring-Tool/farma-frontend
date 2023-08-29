import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Lo from "../pages/Lo/Lo";
import LoCreate from "../pages/Lo/Create";
import LoEdit from "../pages/Lo/Edit";

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
      {
        path: ":oaId",
        element: <Outlet />,
        children: [
          // {
          //   index: true,
          //   element: <LoShow />,
          // },
          {
            path: "editar",
            element: <LoEdit />,
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}