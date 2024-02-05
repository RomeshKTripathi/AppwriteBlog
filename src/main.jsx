import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./LocalStore/LocalStore.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {
  Home,
  Posts,
  MyPosts,
  Services,
  ContactUs,
  Login,
  Signup,
  Post,
  AddPost,
  EditPost,
  AutherizedUser,
} from "./components/PagesIndex.js";

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
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/myposts",
        element: (
          <AutherizedUser>
            <MyPosts />
          </AutherizedUser>
        ),
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/post/:postId",
        element: (
          <AutherizedUser>
            <Post />
          </AutherizedUser>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/add-post",
        element: (
          <AutherizedUser>
            <AddPost />
          </AutherizedUser>
        ),
      },
      {
        path: "/edit-post/:postId",
        element: <EditPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
