import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./screens/Home";
import { FocinhosFelizes } from "./screens/FocinhosFelizes";
import { FocinhosFelizesScreen } from "./screens/FocinhosFelizesScreen";
import { Design } from "./screens/Design";
import { Ai } from "./screens/Ai";
import { Photografy } from "./screens/Photografy";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/focinhos-felizes",
    element: <FocinhosFelizes />,
  },
  {
    path: "/focinhos-felizes-apresentacao",
    element: <FocinhosFelizesScreen />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/ai",
    element: <Ai />,
  },
  {
    path: "/photografy",
    element: <Photografy />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
