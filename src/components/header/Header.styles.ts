import { createStyles } from "antd-style";
import styled from "styled-components";

export const useStyles = createStyles(({ token, css }) => ({
  header: css`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 16px;
    background-color: ${token.colorBgBase};
    border: 1px solid ${token.colorBorder};
    border-left: 0;
  `,
}));

export const Profile = styled.div`
  max-width: 220px;
  display: flex;
  align-items: center;
  gap: 12px;

  .ant-avatar {
    flex-shrink: 0;
  }
`;

export const Info = styled.div`
  line-height: 1;
  flex: 1;
  overflow: hidden;

  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    margin-bottom: 6px;
  }
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    font-size: 12px;
  }
`;
