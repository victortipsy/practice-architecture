import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LandingLayout } from "../layouts";
import { ErrorBoundary, NotFound } from "../utils";

const LandingHome = lazy(() => import("../pages/landing/Home"));
const LandingAboutPage = lazy(() => import("../pages/landing/About"));

export const element = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingHome />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/about",
        element: <LandingAboutPage />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
