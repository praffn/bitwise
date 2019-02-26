import * as React from "react";

import ConfigContainer from "./containers/ConfigContainer";
import RegistersContainer from "./containers/RegistersContainer";
import BinaryOpsContainer from "./containers/BinaryOpsContainer";
import HistoryContainer from "./containers/HistoryContainer";
import Header from "./components/Header";
import TourContainer from "./containers/TourContainer";

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
