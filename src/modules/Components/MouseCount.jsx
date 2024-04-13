import React, { Component } from "react";
import UpdatedComponent from "./HigherOrder";

class MouseCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  IncrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onMouseEnter={this.IncrementCount}>
          {this.props.name} Increment to {count}
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(MouseCount);
