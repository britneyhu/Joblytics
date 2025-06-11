import React, {useState, useEffect} from "react";

import './styles/global.css';
import './styles/FormFillers.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FormFillersGrid from './components/FormFillersGrid';

function App_FormFillers() { 
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

                <div className="row row2">
                    <FormFillersGrid></FormFillersGrid>
                </div>
                
            </div>
        </div>
    )
}

export default App_FormFillers;
