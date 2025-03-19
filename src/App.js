import React from "react";
import NetworkGraph from "./components/NetworkGraph";
import FilterBar from "./components/FilterBar";

function App() {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>

            <div style={{
                width: "100%",
                height: "40px",
                backgroundColor: "#EEEEEE",
                display: "flex",
                padding: "5px",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #CCCCCC"
            }}>

            <h2 style={{color: "#555555"}}>Hyundai Transis 공급망 Network</h2>
            </div>
            <NetworkGraph />
            <FilterBar />
          </div>
  );
}

export default App;
