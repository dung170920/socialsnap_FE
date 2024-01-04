import { Link, useParams } from "react-router-dom";
import { useStyles } from "./User.styles";
import { Avatar } from "antd";
import { CreatePost, Post } from "@/components";
import { Cake } from "iconsax-react";
import { useAppSelector } from "@/store";
import { path } from "@/constants";

const User = () => {
  const { user } = useAppSelector((state) => state.auth.data);
  const { styles } = useStyles();
  const { userId } = useParams();

  return (
    <div className={styles.user}>
      <div className={styles.cover}>
        <img src="https://images.unsplash.com/photo-1528465424850-54d22f092f9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className={styles.info}>
          <Avatar size={120}>D</Avatar>
          <div>
            <h2 className={styles.title}>Demo Account</h2>
            <span className={styles.subTitle}>0 followers</span>
          </div>
        </div>
        {user?.id === userId && <Link to={path.home}>Edit Profile</Link>}
      </div>

      <div className={styles.content}>
        <div className={styles.about}>
          <h4>About</h4>
          <ul>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, iusto ipsam odit nobis vel odio.
              Sapiente iure, rerum iusto facere quod beatae et magni delectus corrupti. Placeat facilis minus ut!
            </li>
            <li>
              <Cake variant="Bulk" />
              <span>01 Sep 2000</span>
            </li>
          </ul>
        </div>
        <div className={styles.posts}>
          <CreatePost />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default User;
