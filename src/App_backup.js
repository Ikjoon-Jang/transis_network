import React, {useState} from "react";
import NetworkGraph from "./components/NetworkGraph";

function App() {

    const [selectedOption, setSelectedOption] = useState("Option 1");

    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Hyundai Transis 공급망 현황 Network Graph Sample</h2>

          <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              style={{ marginBottom: "10px", padding: "5px", fontSize: "16px" }}
          >
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
          </select>


        <NetworkGraph />
      </div>
  );
}

export default App;
