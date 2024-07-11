import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavBar } from '../components/NavBar';
import '../styles/CommonStyles.css'
import { Link } from "react-router-dom";

export const HomePage = () => {
  const styles = {
    body: {
      backgroundImage: `url(${require('../assets/1.jpg')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
  };
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
        
        <div style={styles.body}>
        
          {/* Title */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', paddingTop: 0, paddingRight: 250, paddingLeft: 250}}>
            <header className={`font-header ${isOpen && 'fade-in-2'}`}>Hi, I'm Caitlin!</header>
            
            {/* Text */}
            <p className={`font-paragraph ${isOpen && 'fade-in-3'}`} style={{textAlign: 'center', paddingTop: 20}}>I’m a full-stack developer with a strong passion for front-end development. My experience spans both front-end and back-end technologies, allowing me to deliver end-to-end solutions. However, my true passion lies in creating user interfaces and user experiences.</p>
            <p className={`font-paragraph ${isOpen && 'fade-in-3'}`} style={{textAlign: 'center', paddingTop: 8}}>I'm seeking opportunities that allow me to leverage my full-stack skills while primarily focusing on front-end development.</p>
            
            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
                <Link to="/projects" className={`font button ${isOpen && 'fade-in-4'}`}>View Projects</Link>
                <Link to="/contact" className={`font button ${isOpen && 'fade-in-4'}`} style={{marginLeft: 10}}>Contact Me</Link>
            </div>
          </div>
        </div>
    </div>
  );
};
