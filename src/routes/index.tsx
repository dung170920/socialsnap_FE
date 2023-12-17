import { path } from "@/constants";
import { AuthLayout, MainLayout } from "@/layouts";
import { useAppSelector } from "@/store";
import React, { Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

const SignIn = React.lazy(() => import("@/pages/auth/sign-in/SignIn"));
const SignUp = React.lazy(() => import("@/pages/auth/sign-up/SignUp"));
const Home = React.lazy(() => import("@/pages/home/Home"));
const Explore = React.lazy(() => import("@/pages/explore/Explore"));
const Bookmarks = React.lazy(() => import("@/pages/bookmarks/Bookmarks"));
const CreatePost = React.lazy(() => import("@/pages/create-post/CreatePost"));

const Loadable = () => (
  <Suspense fallback={<div>loading</div>}>
    <Outlet />
  </Suspense>
);

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  return accessToken ? <>{children}</> : <Navigate to={path.signIn} replace />;
};

export const Router = () => {
  return (
    <Routes>
      <Route element={<Loadable />}>
        <Route element={<AuthLayout />}>
          <Route index path={path.signIn} element={<SignIn />} />
          <Route path={path.signUp} element={<SignUp />} />
          {/* <Route path="*" element={<Navigate to={path.signIn} replace />} /> */}
        </Route>
        <Route
          element={
            <RequireAuth>
              <MainLayout />
            </RequireAuth>
          }
        >
          <Route path={path.home} element={<Home />} />
          <Route path={path.explore} element={<Explore />} />
          <Route path={path.bookmarks} element={<Bookmarks />} />
          <Route path={path.createPost} element={<CreatePost />} />
          <Route path="*" element={<div />} />
        </Route>
      </Route>
    </Routes>
  );
};
