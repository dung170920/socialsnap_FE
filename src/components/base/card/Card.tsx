import { CardProps } from "antd";
import { useStyles } from "./Card.styles";

export interface ICardProps extends CardProps {}

export const Card = ({ children, ...props }: ICardProps) => {
  const { styles } = useStyles();

  return (
    <Card className={styles.card} {...props}>
      {children}
    </Card>
  );
};
