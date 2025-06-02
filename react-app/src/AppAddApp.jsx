import './styles/global.css';
import Header from './components/Header';

function AppAddApp() {
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

            <form className="add-app-form">
                <div className="row 1">
                    <div className="item">
                        <label for="company">COMPANY</label>
                        <input type="text" name="company"></input>
                    </div>
                    
                    <div className="item">
                        <label for="position">POSITION</label>
                        <input type="text" name="position"></input>
                    </div>
                </div>
                <div className="row 2">
                    <div className="item">
                        <label for="salary">SALARY</label>
                        <input type="text" name="salary"></input>
                    </div>

                    <div className="item">
                        <label for="location">LOCATION</label>
                        <input type="text" name="location"></input>
                    </div>
                </div>
                <div className="row 3">
                    <div className="item">
                        <label for="link">LINK</label>
                        <input type="text" name="link"></input>
                    </div>

                    <div className="item">
                        <label for="status">STATUS</label>
                        <input type="option" name="status"></input>
                    </div>
                </div>

                <div className="item job-desc">
                    <label for="job-desc">JOB DESCRIPTION</label>
                    <textarea name="job-desc"></textarea>
                </div>

                <div className="submit">
                    <input type="submit" value="SUBMIT"></input>
                </div>
            </form>
        </div>
    )
}

export default AppAddApp;
