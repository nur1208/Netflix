import React from "react";
import { Chart } from "../../components/chart/Chart";
import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import { WidgetLg } from "../../components/widgetLg/WidgetLg";
import { WidgetSm } from "../../components/widgetSm/WidgetSm";
import { HomePageContainer, HomeWidget } from "./homePageSC";
import { chartProps } from "./homPageUtils";
export const HomePage = () => {
  return (
    <HomePageContainer>
      <FeaturedInfo />
      <Chart {...chartProps} />
      <HomeWidget>
        <WidgetSm />
        <WidgetLg />
      </HomeWidget>
    </HomePageContainer>
  );
};
