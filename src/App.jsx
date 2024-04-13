import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import StatelessFunctionComponent from "./modules/Components/StatelessFunction";
import {
  StatefulClassComponent,
  StatefulClassComponentOne,
} from "./modules/Components/StatefulClass";
import ClickComponent from "./modules/Components/ClickCount";
import MouseCount from "./modules/Components/MouseCount";
import ParentComponent from "./modules/Components/ParentComponent";
import ClassProps from "./modules/Props/Components/ClassProps";
import FunctionProps from "./modules/Props/Components/FunctionProps";
import Application from "./modules/States/Components/StateComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello the Simplilearn React Curses</h1>
      <StatelessFunctionComponent />
      <StatefulClassComponent />
      <StatefulClassComponentOne />
      <ClickComponent />
      <MouseCount />
      <ParentComponent />

      <ClassProps name="FJPIEDADE PROGRAMMING" place="Lisbon" />
      <ClassProps name="FJPIEDADE" place="Luanda">
        <button>Pressing</button>
      </ClassProps>
      <ClassProps name="PROGRAMMING" place="Amsterdam" />

      <FunctionProps name="Ayla" place="Uri">
        <button>Functional Pressing</button>
      </FunctionProps>

      <Application />
    </>
  );
}

export default App;
