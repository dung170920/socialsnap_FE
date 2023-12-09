import { BREAKPOINTS, COLORS } from "@/constants";
import styled from "styled-components";

export const AuthWrapper = styled.section`
  display: flex;
  min-height: 100vh;

  @media (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column;
  }
`;

export const RightContent = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.card};
  padding-left: 16px;
  padding-right: 16px;

  @media (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
  }
`;

export const LeftContent = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 64px;

  @media (max-width: ${BREAKPOINTS.md}) {
    margin: 16px;
  }
`;

export const ImageWrapper = styled.div`
  height: 100%;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60%;
  margin: 48px auto;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS.md}) {
    max-width: 100%;
  }
`;

export const Heading = styled.div`
  width: 100%;

  h1 {
    font-size: 42px;
    font-weight: 600;
    margin-bottom: 12px;

    @media (max-width: ${BREAKPOINTS.md}) {
      font-size: 32px;
    }
  }
  p {
    color: ${COLORS.neutral[500]};
    font-size: 14px;
  }
`;
