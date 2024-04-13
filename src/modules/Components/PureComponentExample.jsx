import React, { PureComponent } from "react";

class PureComponentExample extends PureComponent {
  render() {
    //console.log("PureComponent Render");
    return <div>I am a Pure Component, {this.props.name}</div>;
  }
}

export default PureComponentExample;
