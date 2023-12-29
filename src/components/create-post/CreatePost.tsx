import { Avatar } from "antd";
import { useStyles } from "./CreatePost.styles";
import { Input } from "@/components";

export const CreatePost = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.create}>
      <div className={styles.input}>
        <Avatar size={"large"}>D</Avatar>
        <Input placeholder="What's happening?" />
        {/* <Upload>
              <Button icon={<Image />} />
            </Upload> */}
      </div>
    </div>
  );
};
