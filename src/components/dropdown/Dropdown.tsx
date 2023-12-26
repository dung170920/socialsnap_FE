import { Dropdown as AntdDropdown, DropdownProps } from "antd";
import { useStyles } from "./Dropdown.styles";

export interface IDropdownProps extends DropdownProps {}

export const Dropdown = ({ children, ...props }: IDropdownProps) => {
  const { styles } = useStyles();

  return (
    <AntdDropdown getPopupContainer={(triggerNode) => triggerNode} className={styles.dropdown} {...props}>
      {children}
    </AntdDropdown>
  );
};
