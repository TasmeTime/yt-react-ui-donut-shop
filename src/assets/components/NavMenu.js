import styled from "styled-components";
import { RiSearchLine, RiHomeLine } from "react-icons/ri";
import { VscBell } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import Colors from "../Colors";

const NavMenuEl = styled.nav`
  min-height: 10vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: min-content;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 2rem;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`;

const Link = styled.a`
  -webkit-tap-highlight-color: transparent;
  font-size: 1.8rem;
  height: 10vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${(p) => (p.active ? Colors.Primary : "")};

  > svg {
    transition: color 0.5s;
  }

  ::before {
    content: "";
    position: absolute;
    background-color: ${Colors.Primary};
    width: 0.8rem;
    height: 0.8rem;
    top: 0;
    left: 50%;
    transform: translate(-50%, ${(p) => (p.active ? "-50%" : "-150%")});
    border-radius: 50%;
    transition: transform 0.5s;
  }
`;

export default function NavMenu() {
  const [Current, SetCurrent] = useState("home");
  return (
    <NavMenuEl>
      <Link
        active={Current === "home"}
        onClick={() => {
          if (Current !== "home") SetCurrent("home");
        }}
      >
        <RiHomeLine />
      </Link>
      <Link
        active={Current === "search"}
        onClick={() => {
          if (Current !== "search") SetCurrent("search");
        }}
      >
        <RiSearchLine />
      </Link>
      <Link
        active={Current === "notif"}
        onClick={() => {
          if (Current !== "notif") SetCurrent("notif");
        }}
      >
        <VscBell />
      </Link>
      <Link
        active={Current === "profile"}
        onClick={() => {
          if (Current !== "profile") SetCurrent("profile");
        }}
      >
        <BiUser />
      </Link>
    </NavMenuEl>
  );
}
