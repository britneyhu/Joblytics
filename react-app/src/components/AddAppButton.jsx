function AddAppButton({redirect}){
    
    return(
        <button className="add-app-button" onClick={()=> redirect()}>
            <i className="plus-sign fa-solid fa-plus"></i>
        </button>
    );
}

export default AddAppButton;