import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Login, Tags, Signin } from "./routes/index.js";
import { Provider } from "react-redux";
import store from "./store/store.js";
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
