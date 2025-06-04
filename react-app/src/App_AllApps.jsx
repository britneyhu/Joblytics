import React, {useState, useEffect} from "react";

import './styles/global.css';
import './styles/AllApps.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App_AllApps() { 
    const [sortOption, setSortOption] = useState("date");

    const updateSortOption = (event) =>{
        setSortOption(event.target.value);
    }


    const redirectToIndex =()=>{
        window.location.href="/index.html";
    }

    useEffect(()=>{
        console.log(sortOption);
    }, [sortOption])


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
                        <div className="dropdown-container">
                            <select className="dropdown" name="dropdown-graph" value={sortOption} onChange={updateSortOption}>
                                <option value="date">DATE</option>
                                <option value="company">COMPANY</option>
                                <option value="position">POSITION</option>
                                <option value="salary">SALARY</option>
                                <option value="location">LOCATION</option>
                            </select>
                        </div>

                        <SearchBar></SearchBar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App_AllApps;
