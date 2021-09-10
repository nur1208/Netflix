import React from "react";
import { Chart } from "../../components/chart/Chart";
import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import { HomePageContainer } from "./homePageSC";
import { chartProps } from "./homPageUtils";
export const HomePage = () => {
  return (
    <HomePageContainer>
      <FeaturedInfo />
      <Chart {...chartProps} />
    </HomePageContainer>
  );
};
