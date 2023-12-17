import { Camera } from "iconsax-react";
import { useStyles } from "./Logo.styles";
import { CSSProperties } from "react";

interface Props {
  style?: CSSProperties;
}

export const Logo = ({ style }: Props) => {
  const { styles } = useStyles();
  return (
    <div className={styles.wrapper} style={style}>
      <Camera size="36" className={styles.icon} />
      <span className={styles.label}>Socialsnap</span>
    </div>
  );
};
