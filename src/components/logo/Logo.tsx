import { Camera } from "iconsax-react";
import { Wrapper } from "./Logo.styles";
import React from "react";

interface Props {
  style?: React.CSSProperties;
}

export const Logo = ({ style }: Props) => {
  return (
    <Wrapper style={style}>
      <Camera size="36" />
      <span>Socialsnap</span>
    </Wrapper>
  );
};
