import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegIdBadge,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Inicio",
            icon:<FaTh/>
        },
        {
            path:"/Ingresoempleados",
            name:"Ingreso de empleados",
            icon:<FaRegIdBadge/>
        },
        {
            path:"/Perfiles",
            name:"Perfiles",
            icon:<FaUserAlt/>
        },
    ]
    return (
        <div className="box">
           <div style={{width: isOpen ? "50px":  "350px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "none": "block"  ,marginLeft: isOpen ? "0px" : "60px"}} className="logo">
                        <img src={"https://cdn.discordapp.com/attachments/833160365293830185/1032503898004529162/Logo_con_borde_HD.png"} className ='image-icon' /></h1>
                   <div style={{marginLeft: isOpen ? "-2px" : "70px",}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                    
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "none" : "block" }} className="link_text">{item.name}</div>
                       </NavLink>

                   ))
                   
               }
            <div></div>

           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;