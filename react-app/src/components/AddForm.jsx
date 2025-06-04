import React, { useState } from 'react';

function AddForm({redirect}){
    const [formData, setFormData] = useState({company: "", position: "", salary: "0", location: "", link: "", jobStatus: "pending", jobDesc: ""})

    const handleChange = (event) =>{
        const{ name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(formData);
        setFormData({company: "", position: "", salary: "0", location: "", link: "", jobStatus: "pending", jobDesc: ""});
        redirect();
    }
    
    return(
        <form className="add-app-form" onSubmit={handleSubmit}>
            <div className="row row1">
                <div className="item item1">
                    <label htmlFor="company">COMPANY</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange}></input>
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
                    <select className="dropdown" name="jobStatus" value={formData.jobStatus} onChange={handleChange}>
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
                <textarea name="jobDesc" value={formData.jobDesc} onChange={handleChange}></textarea>
            </div>

            <div className="submit">
                <input type="submit" value="SUBMIT"></input>
            </div>
        </form>
    );
}

export default AddForm;