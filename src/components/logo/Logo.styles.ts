import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-size: 20px;
    font-weight: 700;
  }
`;
