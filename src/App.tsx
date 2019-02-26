import * as React from "react";

import ConfigContainer from "./containers/ConfigContainer";
import RegistersContainer from "./containers/RegistersContainer";
import BinaryOpsContainer from "./containers/BinaryOpsContainer";
import HistoryContainer from "./containers/HistoryContainer";

export const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <ConfigContainer />
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
