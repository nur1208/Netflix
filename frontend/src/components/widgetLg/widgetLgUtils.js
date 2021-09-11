import {
  Button,
  WidgetLgAmount,
  WidgetLgDate,
  WidgetLgName,
  WidgetLgStatus,
  WidgetLgTh,
  WidgetLgTr,
  WidgetLgUser,
} from "./widgetLgSC";

const ths = ["Customer", "Date", "Amount", "Status"];

export const renderWidgetLgTh = () => {
  return ths.map((name, index) => (
    <WidgetLgTh key={index}>{name}</WidgetLgTh>
  ));
};

const tds = [
  {
    img: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Susan Carol",
    date: "2 Jun 2021",
    amount: "122.00",
    btnType: "Approved",
  },
  {
    img: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Susan Carol",
    date: "2 Jun 2021",
    amount: "122.00",
    btnType: "Declined",
  },
  {
    img: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Susan Carol",
    date: "2 Jun 2021",
    amount: "122.00",
    btnType: "Pending",
  },
  {
    img: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Susan Carol",
    date: "2 Jun 2021",
    amount: "122.00",
    btnType: "Approved",
  },
];

export const renderWidgetLgTr = () => {
  return tds.map(({ img, name, date, btnType, amount }, index) => (
    <WidgetLgTr id="WidgetLgTr">
      <WidgetLgUser id="WidgetLgUser">
        <img src={img} alt={name} />
      </WidgetLgUser>
      <WidgetLgName id="WidgetLgName">{name}</WidgetLgName>
      <WidgetLgDate id="WidgetLgDate">{date}</WidgetLgDate>
      <WidgetLgAmount id="widgetLgAmount">
        ${amount}
      </WidgetLgAmount>
      <WidgetLgStatus id="WidgetLgStatus">
        <Button type={btnType}>{btnType}</Button>
      </WidgetLgStatus>
    </WidgetLgTr>
  ));
};
