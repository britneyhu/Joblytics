import React, { useState } from 'react';

function EditForm({redirect}){
    const id = localStorage.getItem("editApp");
    const app = JSON.parse(localStorage.getItem(id));
    console.log(app.description);

    const [formData, setFormData] = useState({id: app.id, date: app.date, company: app.company, position: app.position, salary: app.salary, location: app.location, link: app.id, status: app.status, description: app.description})

    const handleChange = (event) =>{
        const{ name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        localStorage.setItem(id, JSON.stringify(formData));

        localStorage.setItem("editApp", 0);

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

export default EditForm;