import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";
import Blogs from "./pages/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: jobCategoryListFetch,
      },
      // {
      //   path: "/job/:id",
      //   element: <JobDetails></JobDetails>,
      //   loader: jobSpecificData,
      // },
      // {
      //   path: "/statistics",
      //   element: <Statistics></Statistics>,
      // },
      // {
      //   path: "/appliedjobs",
      //   element: <AppliedJobs></AppliedJobs>,
      // },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
