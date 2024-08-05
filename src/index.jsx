import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import UserProfile from "./pages/UserProfile";
import ProfileDetails from "./pages/ProfileDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/userProfile",
    element: <UserProfile />,
  },
  {
    path: "/profile/:userId",
    element: <ProfileDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
