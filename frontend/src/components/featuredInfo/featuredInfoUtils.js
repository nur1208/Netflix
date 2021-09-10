import {
  FeaturedIcon,
  FeaturedIconNegative,
  FeaturedItem,
  FeaturedMoney,
  FeaturedMoneyContainer,
  FeaturedMoneyRate,
  FeaturedSub,
  FeaturedTitle,
} from "./featuredInfoSC";

export const featuredItems = [
  {
    title: "Revenue",
    money: "2,415",
    moneyRating: -11.4,
    isRatingUp: false,
  },
  {
    title: "Sales",
    money: "4,415",
    moneyRating: -1.4,
    isRatingUp: false,
  },
  {
    title: "Cost",
    money: "2,225",
    moneyRating: +2.4,
    isRatingUp: true,
  },
];

export const renderFeaturedItem = () => {
  return featuredItems.map(
    ({ title, money, moneyRating, isRatingUp, sup }, index) => (
      <FeaturedItem id="FeaturedItem" key={index}>
        <FeaturedTitle id="FeaturedTitle">{title}</FeaturedTitle>
        <FeaturedMoneyContainer id="FeaturedMoneyContainer">
          <FeaturedMoney id="FeaturedMoney">
            ${money}
          </FeaturedMoney>
          <FeaturedMoneyRate id="FeaturedMoneyRate">
            {moneyRating}
            {isRatingUp ? (
              <FeaturedIcon />
            ) : (
              <FeaturedIconNegative id="FeaturedIconNegative" />
            )}
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub id="FeaturedSub">
          Compared to last month
        </FeaturedSub>
      </FeaturedItem>
    )
  );
};
