import React, { Component } from "react";
import UpdatedComponent from "./HigherOrder";

class ClickComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  updateCountClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.updateCountClick}>
          {this.props.name} clicked {count} time
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickComponent);
