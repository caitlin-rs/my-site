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
        
        <div className='image' style={{backgroundImage: `url(${require('../assets/1.jpg')})`, height: '100%'}}>
        
          {/* Title */}
          <div className='home-container'>
            <header className={`home-header ${isOpen && 'fade-in-2'}`}>Hi, I'm Caitlin!</header>
            
            {/* Text */}
            <p className={`home-paragraph ${isOpen && 'fade-in-3'}`} style={{display: 'flex', textAlign: 'center', paddingTop: 20}}>I am an entry-level full-stack developer with a strong passion for front-end development, currently in my final year of a BSc in Bioinformatics and Computational Biology. With a completed major in Computer Science and in the process of finishing my other major, I expect to graduate by March 2025. I am looking for software development opportunities that allow me to use my full-stack skills, with a primary focus on front-end development, while continuing to learn and take on new challenges.</p>
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
