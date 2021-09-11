import React from "react";
import {
  WidgetLgContainer,
  WidgetLgTable,
  WidgetLgTitle,
  WidgetLgTr,
} from "./widgetLgSC";
import {
  renderWidgetLgTh,
  renderWidgetLgTr,
} from "./widgetLgUtils";

export const WidgetLg = () => {
  return (
    <WidgetLgContainer id="WidgetLgContainer">
      <WidgetLgTitle id="WidgetLgTitle">
        Latest transactions
      </WidgetLgTitle>
      <WidgetLgTable id="WidgetLgTable">
        <WidgetLgTr id="WidgetLgTr">
          {renderWidgetLgTh()}
        </WidgetLgTr>
        {renderWidgetLgTr()}
      </WidgetLgTable>
    </WidgetLgContainer>
  );
};
