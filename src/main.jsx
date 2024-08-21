import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Login, Tags, Signin } from "./routes/index.js";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
    Admin,
    Dashboard,
    AddNewPost,
    AllPosts,
    Resources,
    Settings,
    AdminProfile,
    Support,
} from "./routes/Admin/AdminExports.js";

const router = createBrowserRouter([
    {
        path: "/",

        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/tags",
                element: <Tags />,
            },
            {
                path: "/tags/:tag",
                element: <Tags />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signin",
                element: <Signin />,
            },
        ],
    },
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                path: "/admin",
                element: <Dashboard />,
            },
            {
                path: "/admin/profile",
                element: <AdminProfile />,
            },
            {
                path: "/admin/add-new-post",
                element: <AddNewPost />,
            },
            {
                path: "/admin/all-posts",
                element: <AllPosts />,
            },
            {
                path: "/admin/resources",
                element: <Resources />,
            },
            {
                path: "/admin/settings",
                element: <Settings />,
            },
            {
                path: "/admin/support",
                element: <Support />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
