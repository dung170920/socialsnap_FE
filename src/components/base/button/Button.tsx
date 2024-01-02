import { ButtonProps, Button as AntdButton } from "antd";
import { useStyles } from "./Button.styles";

export interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ className, size = "middle", children, ...props }: IButtonProps) => {
  const { styles, cx } = useStyles();
  return (
    <AntdButton
      className={cx(styles.button, size === "large" && styles.buttonLg, size === "small" && styles.buttonSm, className)}
      {...props}
    >
      {children}
    </AntdButton>
  );
};
