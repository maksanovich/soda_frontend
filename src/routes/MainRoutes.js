import { lazy } from "react";

import MainLayout from "../components/Layout/MainLayout";

const Feature = lazy(() => import("../pages/Feature"));

const MainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "",
            element: <Feature />,
        },
        // {
        //     path: "sell",
        //     element: <Sell />,
        // },
        // {
        //     path: "profile",
        //     element: <Profile />,
        // },
        // {
        //     path: "support",
        //     element: <Support />,
        // }
    ],
};

export default MainRoutes;
