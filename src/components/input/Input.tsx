import { InputProps } from "antd";
import * as S from "./Input.styles";
import { Controller, FieldPath, FieldValues } from "react-hook-form";

export type IInputProps<T extends FieldValues> = {
  isPassword?: boolean;
  control: any;
  name: FieldPath<T>;
  label?: string;
} & Omit<InputProps, "rules" | "name">;

export const Input = ({
  isPassword = false,
  label,
  name,
  placeholder,
  control,
  size = "large",
  ...props
}: IInputProps<FieldValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      {...props}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <S.FormItem label={label} validateStatus={error?.message && "error"} help={error?.message}>
          {isPassword ? (
            <S.InputPassword size={size} placeholder={placeholder} value={value} onChange={onChange} />
          ) : (
            <S.Input size={size} placeholder={placeholder} value={value} onChange={onChange} />
          )}
        </S.FormItem>
      )}
    />
  );
};
