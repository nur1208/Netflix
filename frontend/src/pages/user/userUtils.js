import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import {
  UserShowInfo,
  UserShowInfoTitle,
  UserUpdateInput,
  UserUpdateItem,
} from "./userSc";
export const accountDetailsInfo = [
  {
    icon: <PermIdentity className="userShowIcon" />,
    title: "annabeck99",
  },
  {
    icon: <CalendarToday className="userShowIcon" />,
    title: "10.12.1999",
  },
];

export const contactDetailsInfo = [
  {
    icon: <PhoneAndroid className="userShowIcon" />,
    title: "+1 123 456 67",
  },
  {
    icon: <MailOutline className="userShowIcon" />,
    title: "annabeck99@gmail.com",
  },
  {
    icon: <LocationSearching className="userShowIcon" />,
    title: "New York | USA",
  },
];

export const renderUserShowInfo = (info) => {
  return info.map(({ icon, title }, index) => (
    <UserShowInfo id="UserShowInfo" key={index}>
      {icon}
      <UserShowInfoTitle id="UserShowInfoTitle">
        {title}
      </UserShowInfoTitle>
    </UserShowInfo>
  ));
};

const updateItems = [
  { label: "username", placeholder: "annabeck99" },
  { label: "Full Name", placeholder: "Anna Becker" },
  { label: "Email", placeholder: "annabeck99@gmail.com" },
  { label: "Phone", placeholder: "+1 123 456 67" },
  { label: "Address", placeholder: "New York | USA" },
];

export const renderUserUpdateItem = () => {
  return updateItems.map(({ label, placeholder }, index) => (
    <UserUpdateItem id="UserUpdateItem" key={index}>
      <label>{label}</label>
      <UserUpdateInput
        id="UserUpdateInput"
        type="text"
        placeholder={placeholder}
      />
    </UserUpdateItem>
  ));
};
