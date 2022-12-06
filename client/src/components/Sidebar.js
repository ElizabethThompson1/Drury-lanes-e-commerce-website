import React, { useContext, useState } from "react";
import {IoIosArrowForward,IoIosArrowBack} from "react-icons/io";
import "./Sidebar.css"

const Sidebar = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <>
            <div className="container-fluid mt-3">
                    <IoIosArrowForward className="btn btn-primary" onClick={ToggleSidebar} /> 
                    <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0">Shopping Bag (0)</h4>
                            <IoIosArrowBack className="btn btn-primary" onClick={ToggleSidebar}/><i className="fa fa-times"></i>
                        </div>
                        <div className="sd-body">
                            <ul>
                                <li><a className="sd-link">Menu Item 1</a></li>
                                <li><a className="sd-link">Menu Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
           </div>
           
        </>
    );
}    
export default Sidebar;