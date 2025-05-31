function NavButton({text, redirect}){
    
    return(
        <button className="nav-button" onClick={()=> redirect()}>
            <div className="nav-button-text">{text}</div>
        </button>
    );
}

export default NavButton;

