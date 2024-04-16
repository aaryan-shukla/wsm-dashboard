import React, { Component } from "react";
import DataDisplayCard from "../Component/Utils/DataDisplayCard";
import { Card, Row, Modal } from "antd";
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
import ProfilePictureContainer from "../Component/Utils/ProfilePictureContainer";
import DatePicker from "react-datepicker";
import { CalendarOutlined } from "@ant-design/icons";
import "react-datepicker/dist/react-datepicker.css";
import "./display_dashboard.css";
export default class DisplayDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: chartData,
      modalVisible: false,
      startDate: null,
      endDate: null,
    };
  }
  showModal = () => {
    this.setState({ modalVisible: true });
  };
  handleDateChange = (dates) => {
    const [start, end] = dates;
    this.setState({
      startDate: start,
      endDate: end,
    });
  };
  hideModal = () => {
    this.setState({ modalVisible: false });
  };
  renderFirstSection = () => {
    const { startDate, endDate } = this.state;
    return (
      <div>
        <div className="fsContainer">
          <div className="dashboardContainer">
            <span className="dashboardTitle">Dashboard</span>
          </div>
          <div className="calendarContainer">
            <CalendarOutlined
              className="calendarIcon"
              onClick={this.showModal}
            />
            <Modal
              title="Select Date Range"
              visible={this.state.modalVisible}
              onCancel={this.hideModal}
              footer={null}>
              <DatePicker
                selected={startDate}
                onChange={this.handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
              />
            </Modal>
          </div>
          <br />
        </div>
        <hr className="breakLine" />
      </div>
    );
  };
  getRandomColor() {
    const colors = ["#27DA5A", "#FF7B23", "#03b1fc"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  renderDataDisplayCards = (dataToDisplay) => {
    return (
      <div className="cardContainer">
        {dataToDisplay.map((data, index) => (
          <DataDisplayCard
            key={index}
            backgroundColor={this.getRandomColor()}
            data={data.value}
            data_key={data.key}
          />
        ))}
      </div>
    );
  };
  renderDashboardSection = () => {
    return (
      <div className="chartsContainer">
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
              dataKey="disp_to_facility"
              stroke="#0942FA"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="disposal" stroke="#F01111" />
          </LineChart>
        </Card>
      </div>
    );
  };
  render() {
    const firstDataObject = this.state.chartData[0];
    const dataToDisplay = [
      {
        key: "Total Period Generation",
        value: firstDataObject.total_period_generation,
      },
      { key: "Total Generation", value: firstDataObject.total_generation },
      { key: "Disposal", value: firstDataObject.disposal },
      { key: "Stock", value: firstDataObject.stock },
      { key: "Disposal to facility", value: firstDataObject.disp_to_facility },
    ];
    return (
      <div>
        {/***
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
          </Card>***/}
        <ProfilePictureContainer
          imageUrl={"/Images/download.png"}
          name={"Aaryan"}
        />
        <section>
          <Row>{this.renderFirstSection()}</Row>
        </section>
        <section>
          <Row>{this.renderDataDisplayCards(dataToDisplay)}</Row>
        </section>
        <br />
        <hr />
        <section>
          <Row>{this.renderDashboardSection()}</Row>
        </section>
      </div>
    );
  }
}
