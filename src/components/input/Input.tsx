import { Form, InputProps, Input as AntdInput } from "antd";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { useStyles } from "./Input.styles";

export type IInputProps<T extends FieldValues> = {
  isPassword?: boolean;
  control: any;
  name: FieldPath<T>;
  label?: string;
} & Omit<InputProps, "rules" | "name">;

export const Input = ({
  isPassword = false,
  label,
  placeholder,
  size = "large",
  control,
  name,
  ...props
}: IInputProps<FieldValues>) => {
  const { styles, cx } = useStyles();
  const inputStyle = cx(styles.input, size === "large" && styles.inputLg, size === "middle" && styles.inputMd);

  return (
    <Controller
      control={control}
      name={name}
      {...props}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <Form.Item
          className={styles.item}
          label={label}
          validateStatus={error?.message && "error"}
          help={error?.message}
        >
          {isPassword ? (
            <AntdInput.Password className={inputStyle} placeholder={placeholder} value={value} onChange={onChange} />
          ) : (
            <AntdInput className={inputStyle} placeholder={placeholder} value={value} onChange={onChange} />
          )}
        </Form.Item>
      )}
    />
  );
};
