import React from "react";
import {
  SidebarContainer,
  SidebarInnerContainer,
} from "./sidebarSC";
import { renderSidebarMenu } from "./utils";

export const Sidebar = () => {
  return (
    <SidebarContainer id="SidebarContainer">
      <SidebarInnerContainer id="SidebarInnerContainer">
        {renderSidebarMenu()}
      </SidebarInnerContainer>
    </SidebarContainer>
  );
};
