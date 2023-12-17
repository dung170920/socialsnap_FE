import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useStyles } from "./SignUp.styles";
import { Button, Input } from "@/components";
import { Link, useNavigate } from "react-router-dom";
import { path } from "@/constants";
import { RegisterRequest } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store";
import { register } from "@/store/slices/authSlice";
import { Form } from "antd";

const schema = yup.object().shape({
  name: yup.string().required("Fullname is a required field").min(1).max(40),
  email: yup.string().required("Email is a required field").email(),
  password: yup
    .string()
    .required("Password is a required field")
    .matches(RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/), {
      message:
        "Password must be at least 6 characters and contains at least 1 lowercase, 1 uppercase, 1 number and 1 special character",
    })
    .max(20),
  confirmPassword: yup
    .string()
    .required("Confirm password is a required field")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading) as boolean;
  const { handleSubmit, control, setError } = useForm<RegisterRequest>({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(register(data))
      .unwrap()
      .then(() => navigate("/"))
      .catch((err) => {
        Object.keys(err).forEach((key) =>
          setError(key as keyof RegisterRequest, {
            message: err[key],
          })
        );
      });
  });

  return (
    <Form className={styles.body} layout="vertical" onFinish={onSubmit}>
      <Input control={control} placeholder="Enter your full name" name="name" label="Full Name" />
      <Input control={control} placeholder="Enter your email" name="email" label="Email" />
      <Input control={control} placeholder="Enter your password" name="password" label="Password" isPassword />
      <Input
        control={control}
        placeholder="Enter your confirm password"
        name="confirmPassword"
        label="Confirm Password"
        isPassword
      />
      <div className={styles.buttons}>
        <Button type="primary" block htmlType="submit" loading={loading}>
          Sign Up
        </Button>
        <p>
          Already have an account? <Link to={path.signIn}>Sign in</Link>
        </p>
      </div>
    </Form>
  );
};

export default SignUp;
