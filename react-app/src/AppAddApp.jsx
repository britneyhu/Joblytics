import './styles/global.css';
import Header from './components/Header';
import AddForm from './components/AddForm';

function AppAddApp() {
    const redirectToIndex =()=>{
        window.location.href="/index.html";
    }

    const addApplication = (application) =>{
        console.log(application);
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

            <AddForm addApplication={addApplication}></AddForm>
            
        </div>
    )
}

export default AppAddApp;
