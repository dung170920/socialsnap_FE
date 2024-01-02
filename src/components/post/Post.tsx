import { Button, Card } from "@/components";
import { Avatar, Card as AntdCard } from "antd";
import { useStyles } from "./Post.styles";
import { Heart, Message, MoreCircle, Send2 } from "iconsax-react";

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
      <p>One of the perks of working in an international company is sharing knowledge with your colleagues.</p>
      <div className={styles.images}>
        <div className={styles.image}>
          <img
            src="https://pixabay.com/get/gd93cab33f90fd0665fe290faa156bde5c2e1c29fcf0a8e16cdecb63743feaac2eb67721782a2a748227ba8e3081a731d312c98c441d05d125d0cb14020ecb194_640.jpg"
            alt=""
          />
        </div>
        <div className={styles.image}>
          <img
            src="https://pixabay.com/get/gd93cab33f90fd0665fe290faa156bde5c2e1c29fcf0a8e16cdecb63743feaac2eb67721782a2a748227ba8e3081a731d312c98c441d05d125d0cb14020ecb194_640.jpg"
            alt=""
          />
        </div>
        <div className={styles.image}>
          <img
            src="https://pixabay.com/get/gd93cab33f90fd0665fe290faa156bde5c2e1c29fcf0a8e16cdecb63743feaac2eb67721782a2a748227ba8e3081a731d312c98c441d05d125d0cb14020ecb194_640.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.buttons}>
          <Button type="text" icon={<Message />}>
            25 Comments
          </Button>
          <Button type="text" icon={<Heart />}>
            120k Likes
          </Button>
          <Button type="text" icon={<Send2 />}>
            231 Share
          </Button>
        </div>
      </div>
    </Card>
  );
};
