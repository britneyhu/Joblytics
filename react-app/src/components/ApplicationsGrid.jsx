import React, {useState} from "react";

function ApplicationsGrid({applications}){
    const [showPopup, setShowPopup] = useState(false);

    const [deleteItem, setDeleteItem] = useState();
 
    const togglePopup = (action, id) =>{
        if(action == "open"){
            setShowPopup(true);
            setDeleteItem(id);
        }

        else if(action == "close"){
            setShowPopup(false);
            setDeleteItem();
        }

        else if(action == "delete"){
            console.log(deleteItem);
            window.location.href="/allapps.html"
        }
    }

    const editApp = (app) => {
        window.location.href="/index.html";
    }
    
    return(
        <div className="application-grid-container">
            <div className="grid head">
                <div className="grid-item head date">DATE</div>
                <div className="grid-item head status">STATUS</div>
                <div className="grid-item head company">COMPANY</div>
                <div className="grid-item head position">POSITION</div>
                <div className="grid-item head salary">SALARY</div>
                <div className="grid-item head link">LINK</div>
                <div className="grid-item head location">LOCATION</div>
                <div className="grid-item head desc">DESC</div>
                <div className="grid-item head edit">EDIT</div>
                <div className="grid-item head delete">DELETE</div>
            </div>

            {applications.map(app => (
                <div className="grid" key={app.id}>
                    <div className="grid-item date">
                        {app.date}
                    </div>

                    <div className="grid-item status">
                        {app.status}
                    </div>

                    <div className="grid-item company">
                        <div className="grid-item-text">
                            {app.company}
                        </div>
                        <span className="popup company">{app.company}</span>
                    </div>

                    <div className="grid-item position">
                        <div className="grid-item-text">
                            {app.position}
                        </div>
                        <span className="popup position">{app.position}</span>
                    </div>

                    <div className="grid-item salary">
                        {app.salary}    
                    </div>

                    <a className="grid-item link" href={app.link}>
                        LINK
                    </a>

                    <div className="grid-item location">
                        <div className="grid-item-text">
                            {app.location}
                        </div>
                        <span className="popup location">{app.location}</span>
                    </div>

                    <div className="grid-item desc">
                        Read
                        <span className="popup desc">{app.description}</span>
                    </div>

                    <div className="grid-item edit">
                        <button className="edit-button" onClick={()=> editApp(app.id)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                    </div>

                    <div className="grid-item delete">
                        <button className="delete-button" onClick={()=> togglePopup("open", app.id)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>

            ))}

            {showPopup && (
                <div className="delete-popup-container">
                    <button className="x-button" onClick={()=> togglePopup("close")}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    <div className="delete-text">
                        Are you sure you want to delete this application?
                    </div>

                    <button className="confirm-button" onClick={()=> togglePopup("delete")}>
                        CONFIRM
                    </button>

                </div>
            )}

                
            
        </div>
    );
}

export default ApplicationsGrid;