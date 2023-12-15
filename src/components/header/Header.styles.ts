import { COLORS } from "@/constants";
import { Layout } from "antd";
import styled, { css } from "styled-components";

export const Header = styled(Layout.Header)`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: end;

  ${({ theme }) => css`
    background: ${theme.colors.card};
    border: 1px solid ${theme.colors.border};
    border-left: 0;
  `}
`;

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
    color: ${COLORS.neutral[500]};
    font-size: 12px;
  }
`;
