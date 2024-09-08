import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavBar } from '../components/NavBar';
import '../styles/CommonStyles.css'
import { Link } from "react-router-dom";

export const HomePage = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <NavBar/>
        
        <div className='home-image'>
        
          {/* Title */}
          <div className='home-container'>
            <header className={`font-header ${isOpen && 'fade-in-2'}`}>Hi, I'm Caitlin!</header>
            
            {/* Text */}
            <p className={`font-paragraph ${isOpen && 'fade-in-3'}`} style={{display: 'flex', textAlign: 'center', paddingTop: 20}}>I’m a full-stack developer with a strong passion for front-end development. My experience spans both front-end and back-end technologies, allowing me to deliver end-to-end solutions. However, my true passion lies in creating user interfaces and user experiences.</p>
            <p className={`font-paragraph ${isOpen && 'fade-in-3'}`} style={{display: 'flex', textAlign: 'center', paddingTop: 8}}>I'm seeking opportunities that allow me to leverage my full-stack skills while primarily focusing on front-end development.</p>
            
            {/* Buttons */}
            <div className='home-buttons'>
                <Link to="/projects" className={`font button ${isOpen && 'fade-in-4'}`}>View Projects</Link>
                <Link to="/contact" className={`font button ${isOpen && 'fade-in-4'}`}>Contact Me</Link>
            </div>
          </div>
        </div>
    </div>
  );
};
