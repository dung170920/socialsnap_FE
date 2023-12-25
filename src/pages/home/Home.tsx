import { Avatar, Button, Upload } from "antd";
import { useStyles } from "./Home.styles";
import { Image } from "iconsax-react";

const Home = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <div className={styles.create}>
          <div className={styles.input}>
            <Avatar>D</Avatar>
            <input placeholder="What's happening?" />
            <Upload>
              <Button icon={<Image />} />
            </Upload>
          </div>
        </div>
        <div className={styles.posts}>
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </div>
      </div>
      <div className={styles.right}>Right</div>
    </div>
  );
};

export default Home;
