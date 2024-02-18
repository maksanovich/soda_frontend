import { lazy } from "react";

import MainLayout from "../components/Layout/MainLayout";

const Feature = lazy(() => import("../pages/Feature"));
const Pricing = lazy(() => import("../pages/Pricing"));
const Support = lazy(() => import("../pages/Support"));
const Tools = lazy(() => import("../pages/Tools"));

const MainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "",
            element: <Feature />,
        },
        {
            path: "pricing",
            element: <Pricing />,
        },
        {
            path: "support",
            element: <Support />,
        },
        {
            path: "tools/:type",
            element: <Tools />,
        }
    ],
};

export default MainRoutes;
