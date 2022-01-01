import styled, { keyframes } from "styled-components";
import Colors from "../../Colors";
import { useState } from "react";

const Icon = styled.span`
  display: flex;
  padding: 0.8rem;
  border-radius: 50%;
  font-size: 2.5rem;
  color: ${Colors.Primary};
`;

const Title = styled.span`
  margin-top: 0.4rem;
  text-align: center;
  color: ${Colors.Background};
`;

const SubTitle = styled.span`
  margin-top: 0.2rem;
  color: ${Colors.Gray};
  font-size: 0.8rem;
`;

const FadeIn = keyframes`
0%{
    transform: translateY(-700%);
}
100%{
    transform: translateY(0);
}
`;

const AnimatedPillEl = styled.span`
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min-content;
  padding: 0.5rem;
  border-radius: 50%;
  position: relative;
  transition: all 0.5s;

  ::before {
    content: "";
    position: absolute;
    background-color: ${Colors.Primary};
    width: 100%;
    height: 110%;
    left: 0;
    top: 0;
    z-index: -1;
    transform-origin: center center;
    transform: ${(p) => (p.isOpened ? "scale(1)" : "scale(0)")};
    transition: all 0.4s;
    border-radius: ${(p) => (p.isOpened ? "50px" : "50%")};
  }

  > ${Icon} {
    border: ${(p) => (p.isOpened ? "" : `1px solid ${Colors.Gray}`)};
    background-color: ${(p) => (p.isOpened ? Colors.Background : "")};
    transition: all 0.5s;
  }

  & > ${Title} {
    transform: ${(p) => (p.isOpened ? "" : "translateY(-500%)")};
    display: ${(p) => (p.isOpened ? "block" : "none")};
    animation: ${FadeIn} 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  & > ${SubTitle} {
    transform: ${(p) => (p.isOpened ? "" : "translateY(-700%)")};
    display: ${(p) => (p.isOpened ? "block" : "none")};
    animation: ${FadeIn} 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
`;

export default function AnimatedPill({ icon, title, subTitle }) {
  const [IsOpened, SetIsOpened] = useState(false);
  return (
    <AnimatedPillEl
      isOpened={IsOpened}
      onMouseEnter={() => {
        SetIsOpened(true);
      }}
      onMouseLeave={() => {
        SetIsOpened(false);
      }}
    >
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </AnimatedPillEl>
  );
}
