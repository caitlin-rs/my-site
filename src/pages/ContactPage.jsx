import React from 'react';
import { Helmet } from 'react-helmet';
import { NavBar } from '../components/NavBar';
import image from '../assets/smaller-rot.png';
import '../styles/CommonStyles.css'
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
import ContactForm from '../components/ContactForm';

export const ContactPage = () => {
    const styles = {
        body: {
          backgroundImage: `url(${require('../assets/4.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        },
    };
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <NavBar/>

            {/* Row */}
            <div style={styles.body}>
                <div style={{display: 'flex', flexDirection: 'row', paddingTop: '100px'}}>
                    {/* Text */}
                    <div style={{
                        paddingTop: '20px', 
                        paddingLeft: '40px',
                        paddingRight: '100px',
                        height: '400px',
                        paddingBottom: '20px',
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between',
                        backgroundColor: 'rgba(255, 255, 255, 0.4)'
                    }}>
                        
                        {/* Title */}
                        <header class="font-header-dark">Contact Me</header>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <FiPhone size={30} style={{margin: 4}}/>
                                <text className='phone number' class='font-20-dark' style={{marginLeft: 20}}>076 252 3426</text>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <MdOutlineEmail size={30} style={{margin: 4}}/>
                                <text className='email' class='font-20-dark' style={{marginLeft: 20}}>crobertsonswift@gmail.com</text>
                            </div>
                        </div>

                        {/* Icons */}
                        <div style={{
                            display: 'flex', 
                            flexDirection: 'row', 
                            justifyContent: 'flex-start', 
                            paddingTop: '20px',
                            paddingRight: '40px'
                        }}>
                            <Link to="https://github.com/caitlin-rs" target="_blank" rel="noopener noreferrer">
                                <SiGithub size={40} style={{marginRight: 20}} />
                            </Link>
                            <Link to="https://www.linkedin.com/in/caitlinrobertsonswift" target="_blank" rel="noopener noreferrer">
                                <SiLinkedin size={40} />
                            </Link>
                        </div>
                    </div>
                    <ContactForm/>
                </div>
               
            </div>
        </div>
    );
};