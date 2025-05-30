import React, {useState, useEffect} from "react";

import './styles/global.css';
import Header from './components/Header';
import Graph from './components/Graph';
import Dropdown from './components/Dropdown';

function App() {
  const [graphOption, setGraphOption] = useState("ALL");

  const updateGraphOption = (option) =>{
    setGraphOption(option);
  }

  useEffect(()=>{
    console.log(graphOption);
  }, [graphOption])

  return (
    <div className="home-body">
      <Header></Header>
      <div className="content-title">JASON'S ANALYTICS</div>
      <Graph></Graph>
      <Dropdown className="graph-dropdown" options={["ALL", "APPLIED", "RESPONDED", "REJECTED"]} currentOption={graphOption} updateOption={updateGraphOption}></Dropdown>
    </div>
  );
}

export default App;
