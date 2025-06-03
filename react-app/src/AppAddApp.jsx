import React, {useState, useEffect} from "react";

import './styles/global.css';
import Header from './components/Header';
import AddForm from './components/AddForm';

function AppAddApp() {
    const [appData, setAppData] = useState({company: "", position: "", salary: "", location: "", link: "", jobStatus: "", jobDesc: ""});

    const redirectToIndex =()=>{
        window.location.href="/index.html";
    }

    
    return(
        <div>
            <div className="header-with-button">
                <button className="x-button" onClick={()=> redirectToIndex()}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <Header></Header>
            </div>

            <div className="add-app-title">ADD APPLICATION</div>

            <AddForm redirect={redirectToIndex}></AddForm>
            
        </div>
    )
}

export default AppAddApp;
