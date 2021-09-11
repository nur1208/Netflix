import React from "react";
import {
  WidgetSmContainer,
  WidgetSmList,
  WidgetSmTitle,
} from "./widgetSmSC";
import { renderWidgetSmListItem } from "./widgetSmUtils";

export const WidgetSm = () => {
  return (
    <WidgetSmContainer id="WidgetSmContainer">
      <WidgetSmTitle id="WidgetSmTitle">
        New Join Members
      </WidgetSmTitle>
      <WidgetSmList id="WidgetSmList">
        {renderWidgetSmListItem()}
      </WidgetSmList>
    </WidgetSmContainer>
  );
};
