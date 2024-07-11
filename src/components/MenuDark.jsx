import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import '../styles/CommonStyles.css'

export function MenuDark () {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => {
        return location.pathname === path;
    };

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        <div style={{ right: 0, position: 'absolute', zIndex: 1 }}>
            <div className="menu" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 6 }}>
            <Link to="/home" className={`font-button ${isActive("/home") ? 'active-option-dark' : 'font-button option-dark'} ${isOpen ? 'fade-in-1' : 'fade-in-1'}`}>Home</Link>
            <Link to="/projects" className={`font-button ${isActive("/projects") ? 'active-option-dark' : 'font-button option-dark'} ${isOpen ? 'fade-in-2' : 'fade-in-2'}`}>Projects</Link>
            <Link to="/experience" className={`font-button ${isActive("/experience") ? 'active-option-dark' : 'font-button option-dark'} ${isOpen ? 'fade-in-3' : 'fade-in-3'}`}>Work Experience</Link>
            <Link to="/education" className={`font-button ${isActive("/education") ? 'active-option-dark' : 'font-button option-dark'} ${isOpen ? 'fade-in-4' : 'fade-in-4'}`}>Education and Skills</Link>
            <Link to="/contact" className={`font-button ${isActive("/contact") ? 'active-option-dark' : 'font-button option-dark'} ${isOpen ? 'fade-in-5' : 'fade-in-5'}`}>Contact</Link>
            </div>
        </div>
    );
};