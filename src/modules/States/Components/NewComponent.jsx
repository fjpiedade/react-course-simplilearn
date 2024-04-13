import React, { Component } from "react";

import bt_In from "../../../assets/bt_In.png";
import bt_Out from "../../../assets/bt_Out.png";

export class NewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to Raiz_Tech Channel",
      subscribe: "Subscribe",
      imageURL: bt_In,
    };
  }

  styles = {
    fontStyle: "italic",
    color: "orange",
    // color: "purple",
  };

  buttonClicked = () => {
    this.setState({
      message: "Look like so good understanding the concepts",
      subscribe: "Subscribed",
    });
  };

  imageChange = () => {
    this.setState({
      message: "Thanks help to Learning",
      subscribe: "Subscribed",
      imageURL: bt_Out,
    });
  };
  render() {
    return (
      <div className="Application">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.buttonClicked}>{this.state.subscribe}</button>
        <p />
        <img
          //   style={{ width: "60px", height: "60px" }}
          src={this.state.imageURL}
          alt="the button to pressing"
          onClick={this.imageChange}
        />
      </div>
    );
  }
}

export default NewComponent;
