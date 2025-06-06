function ApplicationsGrid({applications}){
    
    return(
        <div>
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
                        /
                    </div>

                    <div className="grid-item delete">
                        0
                    </div>
                </div>

            ))}

                
            
        </div>
    );
}

export default ApplicationsGrid;