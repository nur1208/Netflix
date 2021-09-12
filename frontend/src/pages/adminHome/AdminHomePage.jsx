import React from "react";
import { Chart } from "../../components/chart/Chart";
import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import { WidgetLg } from "../../components/widgetLg/WidgetLg";
import { WidgetSm } from "../../components/widgetSm/WidgetSm";
import {
  AdminHomePageContainer,
  HomeWidget,
} from "./AdminHomePageSC";
import { chartProps } from "./AdminHomPageUtils";
export const AdminHomePage = () => {
  return (
    <AdminHomePageContainer>
      <FeaturedInfo />
      <Chart {...chartProps} />
      <HomeWidget>
        <WidgetSm />
        <WidgetLg />
      </HomeWidget>
    </AdminHomePageContainer>
  );
};
