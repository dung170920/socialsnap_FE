import { ButtonProps } from "antd";
import * as S from "./Button.styles";

export interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ size = "middle", children, ...props }: IButtonProps) => {
  return (
    <S.Button size={size} {...props}>
      {children}
    </S.Button>
  );
};
