import { Card as AntdCard, CardProps } from "antd";
import { useStyles } from "./Card.styles";

export interface ICardProps extends CardProps {
  className?: string;
}

export const Card = ({ children, className, ...props }: ICardProps) => {
  const { styles, cx } = useStyles();

  return (
    <AntdCard className={cx(styles.card, className)} {...props}>
      {children}
    </AntdCard>
  );
};
