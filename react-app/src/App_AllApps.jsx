import React, {useState, useEffect} from "react";

import './styles/global.css';
import './styles/AllApps.css';
import Header from './components/Header';

function App_AllApps() { 
    const redirectToIndex =()=>{
        window.location.href="/index.html";
    }


    return(
        <div>
            <div className="header-with-button">
                <button className="back-button" onClick={()=> redirectToIndex()}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <Header></Header>
            </div>

            <div className="add-app-row row1">
                <div className="add-app-col col1">
                    <div className="add-app-title">ALL APPLICATIONS</div>
                </div>
                
                <div className="add-app-col col2">
                    <div>Dropdown</div>
                    <div>Search bar</div>
                </div>
            </div>
        </div>
    )
}

export default App_AllApps;
