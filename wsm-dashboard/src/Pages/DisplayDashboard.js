import React, { Component } from "react";
import DataDisplayCard from "../Component/Utils/DataDisplayCard";
import { Card } from "antd";
import "../Component/Utils/CssFiles/card.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import chartData from "./temp.json";

export default class DisplayDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: chartData,
    };
  }

  render() {
    return (
      <div>
        <DataDisplayCard
          backgroundColor={"#fa9f42"}
          data={245.2}
          data_key={"Stocks"}
        />
        <Card className="chartsCard">
          <LineChart
            width={500}
            height={300}
            data={this.state.chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="stock"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="disposal" stroke="#82ca9d" />
          </LineChart>
        </Card>
      </div>
    );
  }
}
