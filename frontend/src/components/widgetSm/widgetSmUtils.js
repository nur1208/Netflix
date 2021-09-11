import {
  WidgetSmButton,
  WidgetSmIcon,
  WidgetSmImg,
  WidgetSmListItem,
  WidgetSmUser,
  WidgetSmUsername,
  WidgetSmUserTitle,
} from "./widgetSmSC";

export const widgetSmListItems = [
  {
    image:
      "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
    username: "Anna Keller",
    userTitle: "Software Engineer",
  },
  {
    image:
      "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
    username: "Anna Keller",
    userTitle: "Software Engineer",
  },
  {
    image:
      "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
    username: "Anna Keller",
    userTitle: "Software Engineer",
  },
  {
    image:
      "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
    username: "Anna Keller",
    userTitle: "Software Engineer",
  },
  {
    image:
      "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
    username: "Anna Keller",
    userTitle: "Software Engineer",
  },
];

export const renderWidgetSmListItem = () => {
  return widgetSmListItems.map(
    ({ image, username, userTitle }, index) => (
      <WidgetSmListItem id="WidgetSmListItem" key={index}>
        <WidgetSmImg id="WidgetSmImg" src={image} alt={username} />
        <WidgetSmUser id="WidgetSmUser">
          <WidgetSmUsername id="WidgetSmUsername">
            {username}
          </WidgetSmUsername>
          <WidgetSmUserTitle id="WidgetSmUserTitle">
            {userTitle}
          </WidgetSmUserTitle>
        </WidgetSmUser>
        <WidgetSmButton id="WidgetSmButton">
          <WidgetSmIcon id="WidgetSmIcon" />
          Display
        </WidgetSmButton>
      </WidgetSmListItem>
    )
  );
};
