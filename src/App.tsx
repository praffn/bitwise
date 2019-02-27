import * as React from "react";
import ReactGA from "react-ga";

import Header from "./components/Header";
import BinaryOpsContainer from "./containers/BinaryOpsContainer";
import ConfigContainer from "./containers/ConfigContainer";
import HistoryContainer from "./containers/HistoryContainer";
import RegistersContainer from "./containers/RegistersContainer";
import TourContainer from "./containers/TourContainer";

function initializeReactGA() {
  ReactGA.initialize("UA-62157376-5");
  ReactGA.pageview("/main");
}

initializeReactGA();

export const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <TourContainer />
      <Header>
        <ConfigContainer />
      </Header>
      <RegistersContainer />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <BinaryOpsContainer />
      </div>
      <HistoryContainer />
    </div>
  );
};

export default App;
