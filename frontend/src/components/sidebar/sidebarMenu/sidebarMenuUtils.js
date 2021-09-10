import { LinkSC, SidebarListItem } from "./sidebarMenuSC";

export const renderSidebarListItem = (sidebarItems) => {
  return sidebarItems.map(({ to, isActive, icon, text }) =>
    to ? (
      <LinkSC
        id="LinkSC"
        href={to}
        style={{ marginBottom: "5px", marginTop: "5px" }}
      >
        <SidebarListItem id="SidebarListItem" isActive={isActive}>
          <SidebarListItem>
            {icon}
            {text}
          </SidebarListItem>
        </SidebarListItem>
      </LinkSC>
    ) : (
      <SidebarListItem
        id="SidebarListItem"
        isActive={isActive}
        style={{ marginBottom: "5px", marginTop: "5px" }}
      >
        <SidebarListItem>
          {icon}
          {text}
        </SidebarListItem>
      </SidebarListItem>
    )
  );
};
