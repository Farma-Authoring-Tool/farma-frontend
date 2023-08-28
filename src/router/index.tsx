import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Lo from "../pages/Lo/Lo";
import LoCreate from "../pages/Lo/Create";
import LoEdit from "../pages/Lo/Edit";
// import ProtectedOutlet from "./_ProtectedOutlet";

// import Login from "@/pages/Login/index.page";
// import Admin from "@/pages/Admin/index.page";
// import AdminSocialServicesPage from "@/pages/Admin/Subjects/[id]/SocialServices/index.page";
// import AdminSocialServicesCreatePage from "@/pages/Admin/Subjects/[id]/SocialServices/Create/index.page";
// import AdminSocialServicesShowPage from "@/pages/Admin/Subjects/[id]/SocialServices/[id]/index.page";

// import AdminSubjectsCreatePage from "@/pages/Admin/Subjects/Create/index.page";
// import AdminSubjectsEditPage from "@/pages/Admin/Subjects/Edit/index.page";
// import AdminSubjectsShowPage from "@/pages/Admin/Subjects/[id]/index.page";
// import AdminSubjectsPage from "@/pages/Admin/Subjects/index.page";

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