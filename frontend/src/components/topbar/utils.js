import { TopBarIconContainer, TopIconBadge } from "./tobBarSC";
import {
  NotificationsNone,
  Language,
  Settings,
} from "@material-ui/icons";

export const topBarIcons = [
  { icon: <NotificationsNone />, badge: 2 },
  { icon: <Language />, badge: 2 },
  { icon: <Settings /> },
];

export const renderTopBarIconContainer = () => {
  return topBarIcons.map(({ icon, badge }, index) => (
    <TopBarIconContainer>
      {icon}{" "}
      {badge && (
        <TopIconBadge id="TopIconBadge">{badge}</TopIconBadge>
      )}
    </TopBarIconContainer>
  ));
};
