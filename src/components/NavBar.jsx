import React, { useState } from 'react';
import logo from '../assets/logo3.png';
import { CiMenuKebab } from "react-icons/ci";
import '../styles/CommonStyles.css'
import { useLocation } from "react-router-dom";
import { MenuDark } from "./MenuDark"
import { MenuLight } from "./MenuLight"

export function NavBar () {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };

    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div>
            <div style={{
                display:'flex',
                justifyContent: 'space-between',
                justifyItems: 'center',
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
            }}>
                {/* Logo */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <a href="/my-site/#/home">
                        <img src={logo} alt="Clickable" width={40} height={40}/>
                    </a>
                    <text class="font ml-4">Caitlin Robertson-Swift</text>
                </div>

                {/* Menu */}
                <button className="icon" onClick={handleMenuOpen}>
                    <CiMenuKebab size={25} />
                </button> 
            </div>
            {menuOpen && (((isActive("/home") || isActive("/") || isActive("/projects") || isActive("/contact")) || window.innerWidth <= 768)? <MenuLight/> : <MenuDark/>)}
        </div>
    );
      
};