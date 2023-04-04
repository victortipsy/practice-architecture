import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, LandingLayout } from "../layouts";
import { ErrorBoundaries, NotFound } from "../utils";

const LandingHomePage = lazy(() => import("../pages/landing/Home"));
const LandingAboutPage = lazy(() => import("../pages/landing/About"));
const AdminHomePage = lazy(() => import("../pages/admin/AdminHome"));
const AdminAboutPage = lazy(() => import("../pages/admin/AdminAbout"));

export const element = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingHomePage />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundaries />,
      },
      {
        path: "/about",
        element: <LandingAboutPage />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundaries />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHomePage />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundaries />,
      },
      {
        path: "/admin-dashboard/about",
        element: <AdminAboutPage />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundaries />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
