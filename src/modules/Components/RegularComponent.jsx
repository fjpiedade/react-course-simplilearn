import React, { Component } from "react";

class RegularComponent extends Component {
  render() {
    //console.log("RegularComponent Render");
    return <div>I am Regular Component {this.props.name}</div>;
  }
}

export default RegularComponent;
