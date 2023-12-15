import { MenuProps } from "antd";
import * as S from "./Menu.styles";

export interface IMenuProps extends MenuProps {}

export const Menu = ({ ...props }: IMenuProps) => {
  return <S.Menu mode="inline" {...props} />;
};
