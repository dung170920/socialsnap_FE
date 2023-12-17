import { Outlet, useLocation } from "react-router-dom";
import { AuthIcon } from "@/assets/icons";
import { useStyles } from "./AuthLayout.styles";
import { Logo } from "@/components";
import { path } from "@/constants";

const headings = [
  {
    path: path.signIn,
    title: "Sign in",
    subTitle: "Welcome back, please enter your account.",
  },
  {
    path: path.signUp,
    title: "Sign up",
    subTitle: "Submit your data for register.",
  },
];

export const AuthLayout = () => {
  const { styles } = useStyles();
  const location = useLocation();
  const heading = headings.find((e) => e.path === location.pathname);

  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.image}>
          <AuthIcon />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.form}>
          <div className={styles.heading}>
            <h1>{heading?.title}</h1>
            <p>{heading?.subTitle}</p>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};
