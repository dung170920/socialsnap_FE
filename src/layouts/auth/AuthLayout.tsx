import { Outlet, useLocation } from "react-router-dom";
import { AuthIcon } from "@/assets/icons";
import {
  AuthWrapper,
  RightContent,
  LeftContent,
  LogoWrapper,
  ImageWrapper,
  Heading,
  FormWrapper,
} from "./AuthLayout.styles";
import { Logo } from "@/components";
import { PATH } from "@/constants";

const headings = [
  {
    path: PATH.signIn,
    title: "Sign in",
    subTitle: "Welcome back, please enter your account.",
  },
  {
    path: PATH.signUp,
    title: "Sign up",
    subTitle: "Submit your data for register.",
  },
];

export const AuthLayout = () => {
  const location = useLocation();
  const heading = headings.find((e) => e.path === location.pathname);

  return (
    <AuthWrapper>
      <LeftContent>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <ImageWrapper>
          <AuthIcon />
        </ImageWrapper>
      </LeftContent>
      <RightContent>
        <FormWrapper>
          <Heading>
            <h1>{heading?.title}</h1>
            <p>{heading?.subTitle}</p>
          </Heading>
          <Outlet />
        </FormWrapper>
      </RightContent>
    </AuthWrapper>
  );
};
