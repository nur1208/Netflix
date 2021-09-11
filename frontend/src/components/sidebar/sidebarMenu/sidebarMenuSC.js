import styled from "styled-components";
import { Link } from "react-router-dom";
export const SidebarMenuContainer = styled.div`
  margin-bottom: 10px;
`;

export const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

export const LinkSC = styled(Link)`
  color: #555;
`;

// has isActive
export const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;

  ${({ isActive }) =>
    isActive && "background-color: rgb(240, 240, 255);"}

  :hover {
    background-color: rgb(240, 240, 255);
  }

  .sidebarIcon {
    margin-right: 5px;
    font-size: 20px !important;
  }
`;
