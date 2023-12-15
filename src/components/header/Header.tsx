import { useAppSelector } from "@/store";
import { Header as HeaderStyle, Info, Profile } from "./Header.styles";
import { Avatar } from "antd";
import { ArrowDown2 } from "iconsax-react";

export const Header = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <HeaderStyle>
      <Profile>
        <Avatar src={user?.avatar} size={40}>
          {user?.name.charAt(0)}
        </Avatar>
        <Info>
          <h4>{user?.name}</h4>
          <span>{user?.email}</span>
        </Info>
        <ArrowDown2 size="20" />
      </Profile>
    </HeaderStyle>
  );
};
