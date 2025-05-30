import React, { useState } from 'react';

function Dropdown({options, currentOption, updateOption}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = ()=> setIsOpen(prev => !prev);

    const changeOption = (option)=>{
        updateOption(option);
        setIsOpen(false);
    }
    
    return(
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                <div className="current-option">{currentOption}</div>
                <i className="chevron-down fa-solid fa-chevron-down"></i>
            </button>

            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li className="dropdown-option" key={index} onClick={()=> changeOption(option)}>
                            <div className="dropdown-option-text">{option}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;