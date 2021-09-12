import styled from "styled-components";
import { MainColor } from "../../appSC";

export const NavbarContainer = styled.div`
  width: 100%;
  color: white;
  font-size: 14px;
  position: fixed;
  top: 0;
  z-index: 999;
  background: linear-gradient(
    to top,
    transparent 0%,
    rgb(0, 0, 0, 0.3) 50%
  );

  ${({ isScrolled }) =>
    isScrolled && `background-color: ${MainColor};`}
`;

export const NavbarInnerContainer = styled.div`
  padding: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 25px;
    margin-right: 40px;
  }

  span {
    margin-right: 20px;
    cursor: pointer;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin: 0px 15px;
    cursor: pointer;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const Options = styled.div`
  display: none;
  background-color: var(--main-color);
  border-radius: 5px;
`;

export const Profile = styled.div`
  span {
    padding: 10px;
    cursor: pointer;
  }

  &:hover {
    #Options {
      display: flex;
      flex-direction: column;
      position: absolute;
    }
  }
`;
