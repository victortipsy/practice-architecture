import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import {
  AdminLayout,
  LandingLayout,
  UserLayout,
  SelectLayout,
} from "../layouts";
import { ErrorBoundary, NotFound } from "../utils";
import { allUrls } from "../constants/all.enums";
import {
  AdminHomePage,
  AdminProfilePage,
  LandingAboutPage,
  LandingHomePage,
  UserHomePage,
  UserProfilePage,
} from "../pages";
// const LandingHomePage = lazy(() => import("../pages/landing/LandingHomePage"));
// const LandingAboutPage = lazy(
//   () => import("../pages/landing/LandingAboutPage")
// );
// const AdminHomePage = lazy(() => import("../pages/admin/AdminHomePage"));
// const AdminProfilePage = lazy(() => import("../pages/admin/AdminProfilePage"));
// const UserHomePage = lazy(() => import("../pages/user/UserHomePage"));
// const UserProfilePage = lazy(() => import("../pages/user/UserProfilePage"));

export const element = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingHomePage />,
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
    path: allUrls.select,
    element: <SelectLayout />,
  },
  {
    path: allUrls.admin,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHomePage />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: `${allUrls.admin}/profile`,
        element: <AdminProfilePage />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    path: allUrls.user,
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserHomePage />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: `${allUrls.user}/profile`,
        element: <UserProfilePage />,
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
