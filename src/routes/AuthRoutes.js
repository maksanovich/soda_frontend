import { lazy } from "react";

import AuthLayout from "../components/Layout/AuthLayout";

const SignIn = lazy(() => import("../pages/Auth/SignIn"));
const SignUp = lazy(() => import("../pages/Auth/SignUp"));

const AuthRoutes = {
    path: "/",
    element: <AuthLayout />,
    children: [
        {
            path: "signin",
            element: <SignIn />,
        },
        {
            path: "signup",
            element: <SignUp />,
        },
    ],
};

export default AuthRoutes;
