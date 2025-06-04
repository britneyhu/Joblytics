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

            <div className="all-apps-body">
                <div className="row row1">
                    <div className="all-app-col col1">
                        <div className="title">ALL APPLICATIONS</div>
                    </div>
                    
                    <div className="col col2">
                        <div>Dropdown</div>
                        <div>
                            <form>
                                <label for="search-bar"></label>
                                <div className="search-bar-container">
                                    <input type="text" name="search-bar" className="search-bar"></input>
                                    <button type="submit" className="search-submit">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App_AllApps;
