import React from "react";

import "../../../App.css";
import NewComponent from "./NewComponent";

class Application extends React.Component {
  styles = {
    fontStyle: "bold",
    color: "teal",
  };

  render() {
    return (
      <div className="Application">
        <h1 style={this.styles}>State Application</h1>
        <NewComponent />
      </div>
    );
  }
}

export default Application;
