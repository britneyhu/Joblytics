import React, {useState, useEffect} from "react";

import './styles/global.css';
import './styles/AddApp.css';
import Header from './components/Header';
import EditForm from './components/EditForm';

function App_EditApp() {
    const todaysDate = new Date().toISOString().split("T")[0];

    const [appData, setAppData] = useState({date: todaysDate, company: "", position: "", salary: "", location: "", link: "", jobStatus: "", jobDesc: ""});

    const redirectToAllApps =()=>{
        window.location.href="/allapps.html";
    }

    
    return(
        <div>
            <div className="header-with-button">
                <button className="x-button" onClick={()=> redirectToIndex()}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <Header></Header>
            </div>

            <div className="title">EDIT APPLICATION</div>

            <EditForm redirect={redirectToAllApps}></EditForm>
            
        </div>
    )
}

export default App_EditApp;
