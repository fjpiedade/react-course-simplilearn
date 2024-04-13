import React, { Component } from "react";
import PureComponentExample from "./PureComponentExample";
import RegularComponent from "./RegularComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Simple Learn",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Simple Learn",
      });
    }, 3000);
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        I am the parent component.
        <RegularComponent name={this.state.name} />
        <PureComponentExample name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
