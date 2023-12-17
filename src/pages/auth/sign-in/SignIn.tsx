import { useStyles } from "./SignIn.styles";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "@/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginRequest } from "@/types";
import { login } from "@/store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import { Form } from "antd";

const schema = yup.object().shape({
  email: yup.string().required("Email is a required field").email(),
  password: yup.string().required().min(6).max(20),
});

const defaultValues = {
  email: "demo@gmail.com",
  password: "Demo@123",
};

const SignIn = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.auth.loading) as boolean;
  const dispatch = useAppDispatch();
  const { handleSubmit, control, setError } = useForm<LoginRequest>({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(login(data))
      .unwrap()
      .then(() => navigate("/"))
      .catch((err) => {
        Object.keys(err).forEach((key) =>
          setError(key as keyof LoginRequest, {
            message: err[key],
          })
        );
      });
  });

  return (
    <Form className={styles.body} layout="vertical" onFinish={onSubmit}>
      <Input control={control} placeholder="Enter your email" name="email" label="Email" />
      <Input control={control} placeholder="Enter your password" name="password" label="Password" isPassword />
      <Link className={styles.forgotPassword} to="/forgot-password">
        Forgot Password?
      </Link>
      <div className={styles.buttons}>
        <Button type="primary" block htmlType="submit" loading={loading}>
          Sign In
        </Button>
        <p>
          Don’t have an account? <Link to="/sign-up">Sign up</Link>
        </p>
      </div>
    </Form>
  );
};

export default SignIn;
