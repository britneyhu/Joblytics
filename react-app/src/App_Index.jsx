import React, {useState, useEffect} from "react";

import './styles/global.css';
import './styles/index.css';
import Header from './components/Header';
import Graph from './components/Graph';
import Stats from './components/Stats';
import AddAppButton from './components/AddAppButton';
import NavButton from './components/NavButton';

function App_Index() {
  const [graphOption, setGraphOption] = useState("all");
  const [stats, setStats] = useState({"applied": 0, "responded": 0, "rejected": 0, "interviewing": 0, "offer": 0});

  const updateGraphOption = (event) =>{
    setGraphOption(event.target.value);
  }

  const redirectToAddApp =()=>{
    window.location.href="/addapp.html";
  }

  const redirectToAllApps =()=>{
    window.location.href="/allapps.html";
  }

  const redirectToFormFillers =()=>{
    window.location.href="/formfillers.html";
  }


  useEffect(()=>{
    console.log(graphOption);
  }, [graphOption]);

  return (
    <div className="home-body">
      <Header></Header>

      <div className="row row1">

        <div className="col col1">
          
          <div className="title">JASON'S ANALYTICS</div>
          <Graph></Graph>
          <div className="dropdown-container">
            <select className="dropdown" name="dropdown-graph" value={graphOption} onChange={updateGraphOption}>
                <option value="all">ALL</option>
                <option value="applied">APPLIED</option>
                <option value="responded">RESPONDED</option>
                <option value="rejected">REJECTED</option>
            </select>
          </div>
        </div>

        <div className="col col2">
          <Stats stats={stats}></Stats>
        </div>

      </div>

      <div className= "row row2">
        <NavButton text="FORM FILLERS" redirect={redirectToFormFillers}></NavButton>
        <AddAppButton redirect={redirectToAddApp}></AddAppButton>
        <NavButton text="ALL APPLICATIONS" redirect={redirectToAllApps}></NavButton>
      </div>
    </div>
  );
}

export default App_Index;
