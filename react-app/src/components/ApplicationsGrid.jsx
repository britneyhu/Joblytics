function ApplicationsGrid({applications}){
    
    return(
        <div>
            <div className="grid">
                <div className="grid-item head">DATE</div>
                <div className="grid-item head">STATUS</div>
                <div className="grid-item head">COMPANY</div>
                <div className="grid-item head">POSITION</div>
                <div className="grid-item head">SALARY</div>
                <div className="grid-item head">LINK</div>
                <div className="grid-item head">LOCATION</div>
                <div className="grid-item head">DESC</div>
                <div className="grid-item head">EDIT</div>
                <div className="grid-item head">DELETE</div>
{/* 
                {applications.map(app => (
                    <div key={app.id}>
                        <div className="grid-item">{app.date}</div>
                        <div className="grid-item">{app.status}</div>
                        <div className="grid-item">{app.company}</div>
                        <div className="grid-item">{app.position}</div>
                        <div className="grid-item">{app.salary}</div>
                        <a className="grid-item link" href="">{app.link}</a>
                        <div className="grid-item">{app.location}</div>
                        <div className="grid-item desc">{app/description}</div>
                        <div className="grid-item">/</div>
                        <div className="grid-item"></div>
                    </div>

                ))} */}

                <div className="grid-item">6/4</div>
                <div className="grid-item">PENDING</div>
                <div className="grid-item">Google</div>
                <div className="grid-item">SWE</div>
                <div className="grid-item">80k</div>
                <a className="grid-item link" href="">LINK</a>
                <div className="grid-item">Mountain View</div>
                <div className="grid-item desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu hendrerit eros. Etiam gravida tortor at risus consectetur, eu dapibus nulla dignissim. Duis id est facilisis diam blandit mattis. Morbi ac mollis felis. Morbi gravida arcu a mi tincidunt tempor ut at nibh. Maecenas iaculis sem ut metus tincidunt tincidunt. Vivamus tristique vel turpis eget aliquam. Ut bibendum tellus sit amet bibendum iaculis. Etiam nec risus id quam scelerisque placerat. Suspendisse nec magna sed dui sagittis sollicitudin vitae ut dolor. Praesent at lectus dictum ex auctor vestibulum eu sit amet est.</div>
                <div className="grid-item">/</div>
                <div className="grid-item">0</div>
            </div>
        </div>
    );
}

export default ApplicationsGrid;