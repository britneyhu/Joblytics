import React, {useState, useEffect} from "react";

import './styles/global.css';
import './styles/AllApps.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ApplicationsGrid from './components/ApplicationsGrid';

function App_AllApps() { 
    const tempApps = [
        { id: 1, date:"6/4", status: "pending", company: "Google", position: "Engineer", salary: "80k", link: "http://britneyhu.com", location: "Palo Alto", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu hendrerit eros. Etiam gravida tortor at risus consectetur, eu dapibus nulla dignissim. Duis id est facilisis diam blandit mattis. Morbi ac mollis felis. Morbi gravida arcu a mi tincidunt tempor ut at nibh. Maecenas iaculis sem ut metus tincidunt tincidunt. Vivamus tristique vel turpis eget aliquam. Ut bibendum tellus sit amet bibendum iaculis. Etiam nec risus id quam scelerisque placerat. Suspendisse nec magna sed dui sagittis sollicitudin vitae ut dolor. Praesent at lectus dictum ex auctor vestibulum eu sit amet est."},
        { id: 2, date:"3/4", status: "pending", company: "Facebook", position: "Designer", salary: "100k", link: "http://britneyhu.com", location: "Fremont", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu hendrerit eros. Etiam gravida tortor at risus consectetur, eu dapibus nulla dignissim. Duis id est facilisis diam blandit mattis. Morbi ac mollis felis. Morbi gravida arcu a mi tincidunt tempor ut at nibh. Maecenas iaculis sem ut metus tincidunt tincidunt. Vivamus tristique vel turpis eget aliquam. Ut bibendum tellus sit amet bibendum iaculis. Etiam nec risus id quam scelerisque placerat. Suspendisse nec magna sed dui sagittis sollicitudin vitae ut dolor. Praesent at lectus dictum ex auctor vestibulum eu sit amet est."},
        { id: 3, date:"6/7", status: "interviewing", company: "Amazon", position: "Manager", salary: "50k", link: "http://britneyhu.com", location: "Palo Alto", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu hendrerit eros. Etiam gravida tortor at risus consectetur, eu dapibus nulla dignissim. Duis id est facilisis diam blandit mattis. Morbi ac mollis felis. Morbi gravida arcu a mi tincidunt tempor ut at nibh. Maecenas iaculis sem ut metus tincidunt tincidunt. Vivamus tristique vel turpis eget aliquam. Ut bibendum tellus sit amet bibendum iaculis. Etiam nec risus id quam scelerisque placerat. Suspendisse nec magna sed dui sagittis sollicitudin vitae ut dolor. Praesent at lectus dictum ex auctor vestibulum eu sit amet est."},
    ]

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
                <div className="row row1">
                    <div className="all-app-col col1">
                        <div className="title">ALL APPLICATIONS</div>
                    </div>
                    
                    <div className="col col2"> 
                        <div className="dropdown-container">
                            <select className="dropdown" name="dropdown-graph" value={sortOption} onChange={updateSortOption}>
                                <option value="date">DATE</option>
                                <option value="company">COMPANY</option>
                                <option value="position">POSITION</option>
                                <option value="salary">SALARY</option>
                                <option value="location">LOCATION</option>
                            </select>
                        </div>

                        <SearchBar></SearchBar>
                    </div>
                </div>

                <div className="row row2">
                    <ApplicationsGrid applications={tempApps}></ApplicationsGrid>
                </div>
                
            </div>
        </div>
    )
}

export default App_AllApps;
