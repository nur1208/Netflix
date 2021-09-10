import React from "react";
import {
  SidebarList,
  SidebarMenuContainer,
  SidebarTitle,
} from "./sidebarMenuSC";
import { renderSidebarListItem } from "./sidebarMenuUtils";

export const SidebarMenu = ({ title, sidebarItems }) => {
  return (
    <SidebarMenuContainer id="SidebarMenuContainer">
      <SidebarTitle id="SidebarTitle">{title}</SidebarTitle>
      <SidebarList id="SidebarList">
        {renderSidebarListItem(sidebarItems)}
      </SidebarList>
    </SidebarMenuContainer>
  );
};
