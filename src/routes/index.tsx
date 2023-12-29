import { path } from "@/constants";
import { AuthLayout, MainLayout } from "@/layouts";
import { useAppSelector } from "@/store";
import { Spin } from "antd";
import React, { Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

const SignIn = React.lazy(() => import("@/pages/auth/sign-in/SignIn"));
const SignUp = React.lazy(() => import("@/pages/auth/sign-up/SignUp"));
const Home = React.lazy(() => import("@/pages/home/Home"));
const Explore = React.lazy(() => import("@/pages/explore/Explore"));
const Bookmarks = React.lazy(() => import("@/pages/bookmarks/Bookmarks"));
const User = React.lazy(() => import("@/pages/user/User"));
const NotFound = React.lazy(() => import("@/pages/not-found/NotFound"));

const Loadable = () => (
  <Suspense fallback={<Spin fullscreen />}>
    <Outlet />
  </Suspense>
);

export const Router = () => {
  const { accessToken } = useAppSelector((state) => state.auth.data);

  return (
    <Routes>
      <Route path="/" element={<Loadable />}>
        {accessToken ? (
          <Route element={<MainLayout />}>
            <Route path={path.home} element={<Home />} />
            <Route path={path.explore} element={<Explore />} />
            <Route path={path.bookmarks} element={<Bookmarks />} />
            <Route path={path.user}>
              <Route index element={<Navigate to={path.notFound} replace />} />
              <Route path=":userId" element={<User />} />
            </Route>
            <Route path="*" element={<Navigate to={path.notFound} replace />} />
          </Route>
        ) : (
          <Route element={<AuthLayout />}>
            <Route path={path.signIn} element={<SignIn />} />
            <Route path={path.signUp} element={<SignUp />} />
          </Route>
        )}
        <Route path={path.notFound} element={<NotFound />} />
      </Route>
    </Routes>
  );
};
