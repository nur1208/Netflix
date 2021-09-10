import React from "react";
import {
  Logo,
  TopAvatar,
  TopBarContainer,
  TopBarInnerContainer,
  TopLeft,
  TopRight,
} from "./tobBarSC";
import { renderTopBarIconContainer } from "./utils";

export const Topbar = () => {
  return (
    <TopBarContainer id="TopBarContainer">
      <TopBarInnerContainer id="TopBarInnerContainer">
        <TopLeft id="TopLeft">
          <Logo id="Logo">lamaadmin</Logo>
        </TopLeft>
        <TopRight id="TopRight">
          {renderTopBarIconContainer()}
          <TopAvatar
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="top-avatar"
          />
        </TopRight>
      </TopBarInnerContainer>
    </TopBarContainer>
  );
};
