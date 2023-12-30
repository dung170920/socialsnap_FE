import { Card } from "@/components";
import { Avatar, Card as AntdCard } from "antd";
import { useStyles } from "./Post.styles";
import { MoreCircle } from "iconsax-react";

const { Meta } = AntdCard;

export const Post = () => {
  const { styles } = useStyles();

  return (
    <Card>
      <div className={styles.header}>
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" size={44} />}
          title="Clara Kim"
          description="12 April, 2023 at 09.28 PM"
        />
        <button>
          <MoreCircle />
        </button>
      </div>

      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};
