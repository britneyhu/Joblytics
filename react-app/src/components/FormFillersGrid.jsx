import React, {useState, useEffect} from "react";

function FormFillersGrid(){
    const [showAddForm, setShowAddForm] = useState(false);

    const [showPopup, setShowPopup] = useState(false);

    const [apps, setApps] = useState([]);

    const toggleAddForm = (action, id) =>{
        if(action == "open"){
            setShowAddForm(true);
        }

        else if(action == "close"){
            setShowAddForm(false);
        }
    }
 
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
            // localStorage.removeItem(deleteItem);
            // window.location.href="/allapps.html"
        }
    }

    const addFiller = (event)=>{
        event.preventDefault();
    }

    useEffect(()=> {
        let numApps = localStorage.getItem("numApps");

        const loadedApps = [];
        for(let i = 1; i <= numApps; i++){
            const item = localStorage.getItem(i);

            if(item) {
                try {
                    loadedApps.push(JSON.parse(item));
                } catch(e){
                    console.error("Failed to parse localStorage item:", item);
                }
            }
        }
        setApps(loadedApps);
    }, []);
    
    return(
        <div className="all-apps-body">
            <div className="row row1">
                <div className="all-app-col col1">
                    <div className="title">FORM FILLERS</div>
                </div>
                
                <div className="col col2"> 
                    <button className="add-field" onClick={()=> toggleAddForm("open")}>
                        <i className=" plus-sign fa-solid fa-plus"></i>
                        ADD FIELD
                    </button>
                </div>
            </div>

            <div className="application-grid-container">
                <div className="grid head">
                    <div className="grid-item head field">FIELD</div>
                    <div className="grid-item head response">RESPONSE</div>
                    <div className="grid-item head edit">EDIT</div>
                    <div className="grid-item head delete">DELETE</div>
                </div>

                {apps.map((app) => (
                    <div className="grid" key={app.id}>
                        <div className="grid-item field">
                            {app.date}
                        </div>

                        <div className="grid-item response">
                            {app.status}
                        </div>

                        <div className="grid-item edit">
                            <button className="edit-button" onClick={()=> toggleAddForm("open", app.id)}>
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

                {showAddForm && (
                    <div className="delete-popup-container">
                        <button className="x-button" onClick={()=> toggleAddForm("close")}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <form onSubmit={addFiller}>
                            <label htmlFor="field">FIELD</label>
                            <input type="text"></input>

                            <label htmlFor="response">RESPONSE</label>
                            <input type="text"></input>

                            <input className="confirm-button" type="submit" value="ADD">
                            </input>
                        </form>

                    </div>
                )}

                {showPopup && (
                    <div className="delete-popup-container">
                        <button className="x-button" onClick={()=> togglePopup("close")}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <div className="delete-text">
                            Are you sure you want to delete this field?
                        </div>

                        <button className="confirm-button" onClick={()=> togglePopup("delete")}>
                            CONFIRM
                        </button>

                    </div>
                )}

                    
                
            </div>
        </div>
    );
}

export default FormFillersGrid;