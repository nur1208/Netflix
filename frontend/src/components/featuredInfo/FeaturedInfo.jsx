import React from "react";
import { FeaturedContainer } from "./featuredInfoSC";
import { renderFeaturedItem } from "./featuredInfoUtils";

export const FeaturedInfo = () => {
  return (
    <FeaturedContainer id="FeaturedContainer">
      {renderFeaturedItem()}
    </FeaturedContainer>
  );
};
