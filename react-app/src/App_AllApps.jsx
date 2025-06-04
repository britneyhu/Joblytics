import React, {useState, useEffect} from "react";

import './styles/global.css';
import './styles/AllApps.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

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

            <div className="all-apps-body">
                <div className="row row1">
                    <div className="all-app-col col1">
                        <div className="title">ALL APPLICATIONS</div>
                    </div>
                    
                    <div className="col col2">
                        <div>Dropdown</div>
                        <SearchBar></SearchBar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App_AllApps;
