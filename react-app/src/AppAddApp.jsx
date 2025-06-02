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
        </div>
    )
}

export default AppAddApp;
