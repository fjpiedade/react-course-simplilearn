import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h2>
          Hello Guys I am {this.props.name} from {this.props.place}
        </h2>
        <p>
          re-enter on the new programming world, please help me a bit be better
        </p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default ClassProps;
