import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer, ChartTitle } from "./chartSC";
// import { data } from "./chartUtils";

export const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <ChartContainer id="ChartContainer">
      <ChartTitle id="ChartTitle">{title}</ChartTitle>
      {/* aspect={4 / 1} means if the width 400px then the hight of the chat will be 100px */}
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          {/* dataKey is what points name  */}
          {/* stroke is what the color  */}
          {/* you can also create YAxis */}
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#5550bd"
          />
          {/* for seeing the details */}
          <Tooltip />

          {grid && (
            <CartesianGrid
              stroke="#e0dfdf"
              strokeDasharray="5 5"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
