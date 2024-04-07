import React, { Component } from "react";
import "./CssFiles/data_display.css";
export default class DataDisplayCard extends Component {
  render() {
    const { backgroundColor, data, data_key } = this.props;

    return (
      <div className="cardStyle" style={{ backgroundColor } || "#03b1fc"}>
        <div className="innerCardStyle">
          <div className="numberStyle">{data}</div>
          <div className="textStyle">
            <div className="nameStyle">{data_key}</div>
          </div>
        </div>
      </div>
    );
  }
}
