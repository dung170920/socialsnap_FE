import { useAppDispatch } from "@/store";
import { Header as HeaderStyle } from "./Header.styles";
import { Button } from "@/components";
import { logout } from "@/store/slices/authSlice";

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <HeaderStyle>
      <Button type="text" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </HeaderStyle>
  );
};
