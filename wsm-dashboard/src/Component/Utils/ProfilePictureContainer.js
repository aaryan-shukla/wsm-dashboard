import React, { Component } from "react";
import "./CssFiles/profile_picture_icon.css";
export default class ProfilePictureContainer extends Component {
  render() {
    const { imageUrl, name } = this.props;

    return (
      <div className="text">
        <div className="photoIcon">
          <img src={imageUrl} alt="Profile" className="imgCss" />
        </div>
        <div style={{ marginTop: "2px" }}>
          <span className="text">{name}</span>
        </div>
      </div>
    );
  }
}
