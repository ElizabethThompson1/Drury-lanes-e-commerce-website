import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {IoMdArrowForward} from "react-icons/io";
import {FiTrash2} from "react-icons/fi";
import CartItem from "../components/Cart";
import { SidebarContext } from "../contexts/SidebarContext";

const Sidebar = () => {
    const {isOpen,hndleClose} = useContext(SidebarContext);
    return (
        <div>Sidebar</div>
    );
};

export default Sidebar;