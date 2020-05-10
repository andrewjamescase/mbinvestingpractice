import React, { useState, useEffect } from "react";
import "./App.css";
import DailyPrice from "./components/DailyPrice/DailyPrice";

function App() {
  const [response, setResponse] = useState({});
  const portfolioStocks = [BAC, BHC, C, CAR, DAL, DFS, DXC, ENPH, ENTG, FENY, FHLC, FITB, FREL, FUTY, GM, HUM, IGLB, IJR, INTC, PFE, PPD, ROST, SABR, SGMO];
  // useEffect(() => {
  //   fetch("http://localhost:9000/testAPI")
  //     .then((res) => setResponse(res))
  //     .catch((err) => err);
  // }, []);

  return (
    <div className="App">
      <DailyPrice />
    </div>
  );
}

export default App;
