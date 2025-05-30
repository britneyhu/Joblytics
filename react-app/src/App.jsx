import React, {useState, useEffect} from "react";

import './styles/global.css';
import Header from './components/Header';
import Graph from './components/Graph';
import Dropdown from './components/Dropdown';
import Stats from './components/Stats';
import AddAppButton from './components/AddAppButton';

function App() {
  const [graphOption, setGraphOption] = useState("ALL");
  const [stats, setStats] = useState({"applied": 0, "responded": 0, "rejected": 0, "interviewing": 0, "offer": 0})

  const updateGraphOption = (option) =>{
    setGraphOption(option);
  }

  useEffect(()=>{
    console.log(graphOption);
  }, [graphOption])

  return (
    <div className="home-body">
      <Header></Header>

      <div className="row1">

        <div className="col1">
          
          <div className="content-title">JASON'S ANALYTICS</div>
          <Graph></Graph>
          <Dropdown className="graph-dropdown" options={["ALL", "APPLIED", "RESPONDED", "REJECTED"]} currentOption={graphOption} updateOption={updateGraphOption}></Dropdown>
        </div>

        <div className="col2">
          <Stats stats={stats}></Stats>
        </div>

      </div>

      <div className= "row2">
        <AddAppButton></AddAppButton>
      </div>
    </div>
  );
}

export default App;
