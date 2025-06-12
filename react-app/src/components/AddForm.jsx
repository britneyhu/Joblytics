import React, { useState } from 'react';

function AddForm({redirect}){
    const todaysDate = new Date().toISOString().split("T")[0];

    const [formData, setFormData] = useState({id: "application-"+parseInt(localStorage.getItem("numApps")) + 1, date: todaysDate, company: "", position: "", salary: 0, location: "", link: "", status: "pending", description: ""})

    const handleChange = (event) =>{
        const{ name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(isNaN(parseInt(localStorage.getItem("numApps")))){
            localStorage.setItem("numApps", 0);
            
        }

        let numApps = parseInt(localStorage.getItem("numApps"));

        formData.id = "application-"+(numApps+1);

        localStorage.setItem(formData.id, JSON.stringify(formData));
        localStorage.setItem("numApps", numApps+1);

        setFormData({id: numApps+1, date: todaysDate, company: "", position: "", salary: 0, location: "", link: "", status: "pending", description: ""});
        redirect();
    }
    
    return(
        <form className="add-app-form" onSubmit={handleSubmit}>
            <div className="row row1">
                <div className="item item1">
                    <label htmlFor="date">DATE</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange}></input>
                </div>
            </div>

            <div className="row row1">
                <div className="item item1">
                    <label htmlFor="company">COMPANY</label>
                    <input className="date-picker" type="text" name="company" value={formData.company} onChange={handleChange}></input>
                </div>
                
                <div className="item item2">
                    <label htmlFor="position">POSITION</label>
                    <input type="text" name="position" value={formData.position} onChange={handleChange}></input>
                </div>
            </div>
            <div className="row row2">
                <div className="item item3">
                    <label htmlFor="salary">SALARY</label>
                    <div className="salary-text">{formData.salary}K</div>
                    <input className="salary-slider" type="range" min="0" max="200" name="salary" value={formData.salary} onChange={handleChange}></input>
                </div>

                <div className="item item4">
                    <label htmlFor="location">LOCATION</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange}></input>
                </div>
            </div>
            <div className="row row3">
                <div className="item item4">
                    <label htmlFor="link">LINK</label>
                    <input type="text" name="link" value={formData.link} onChange={handleChange}></input>
                </div>

                <div className="item item5">
                    <label htmlFor="jobStatus">STATUS</label>
                    <select className="dropdown" name="status" value={formData.status} onChange={handleChange}>
                        <option value="pending">PENDING</option>
                        <option value="rejected">REJECTED</option>
                        <option value="interviewing">INTERVIEWING</option>
                        <option value="offer">OFFER</option>
                        <option value="not-interested">NOT INTERESTED</option>
                    </select>
                </div>
            </div>

            <div className="item item6">
                <label htmlFor="job-desc">JOB DESCRIPTION</label>
                <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
            </div>

            <div className="submit">
                <input type="submit" value="SUBMIT"></input>
            </div>
        </form>
    );
}

export default AddForm;