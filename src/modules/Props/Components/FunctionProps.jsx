import React from "react";

function FunctionProps(props) {
  return (
    <>
      <h2>This a Functional Component with Props</h2>
      <h2>
        Hello Guys I am {props.name} from {props.place}
      </h2>
      <p>{props.children}</p>
    </>
  );
}

export default FunctionProps;
