import { CreatePost, Post } from "@/components";
import { useStyles } from "./Home.styles";

const Home = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <CreatePost />
        <div className={styles.posts}>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className={styles.right}>Right</div>
    </div>
  );
};

export default Home;
