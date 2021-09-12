import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { SidebarMenu } from "./sidebarMenu/SidebarMenu";

export const sidebarMenus = [
  {
    title: "Dashboard",
    sidebarItems: [
      {
        icon: <LineStyle className="sidebarIcon" />,
        text: "Home",
        isActive: true,
        to: "/admin/",
      },
      {
        icon: <Timeline className="sidebarIcon" />,
        text: "Analytics",
      },
      {
        icon: <TrendingUp className="sidebarIcon" />,
        text: "Sales",
      },
    ],
  },
  {
    title: "Quick Menu",
    sidebarItems: [
      {
        icon: <PermIdentity className="sidebarIcon" />,
        text: "Users",
        to: "/admin/users",
      },
      {
        icon: <Storefront className="sidebarIcon" />,
        text: "Products",
        to: "/admin/products",
      },
      {
        icon: <AttachMoney className="sidebarIcon" />,
        text: "Transactions",
      },
      {
        icon: <BarChart className="sidebarIcon" />,
        text: "Reports",
      },
    ],
  },

  {
    title: "Notifications",
    sidebarItems: [
      {
        icon: <MailOutline className="sidebarIcon" />,
        text: "Mail",
      },
      {
        icon: <DynamicFeed className="sidebarIcon" />,
        text: "Feedback",
      },
      {
        icon: <ChatBubbleOutline className="sidebarIcon" />,
        text: "Messages",
      },
    ],
  },
  {
    title: "Staff",
    sidebarItems: [
      {
        icon: <WorkOutline className="sidebarIcon" />,
        text: "Manage",
      },
      {
        icon: <Timeline className="sidebarIcon" />,
        text: "Analytics",
      },
      {
        icon: <Report className="sidebarIcon" />,
        text: "Reports",
      },
    ],
  },
];

export const renderSidebarMenu = () => {
  return sidebarMenus.map((item) => <SidebarMenu {...item} />);
};
