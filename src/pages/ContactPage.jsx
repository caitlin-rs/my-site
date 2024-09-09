import React from 'react';
import { Helmet } from 'react-helmet';
import { NavBar } from '../components/NavBar';
import '../styles/CommonStyles.css'
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
import ContactForm from '../components/ContactForm';

export const ContactPage = () => {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <NavBar/>

            {/* Row */}
            <div className='image' style={{backgroundImage: `url(${require('../assets/4.jpg')})` }}>
                <div className='con-container'>
                    {/* Text */}
                    <div className='con-text-container'>
                        {/* Title */}
                        <header class="font-header-dark">Contact Me</header>
                        <div className='con-icon-text'>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <FiPhone size={30} style={{margin: 4}}/>
                                <text className='phone number' class='con-text-dark' style={{marginLeft: 20}}>076 252 3426</text>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <MdOutlineEmail size={30} style={{margin: 4}}/>
                                <text className='email' class='con-text-dark' style={{marginLeft: 20}}>crobertsonswift@gmail.com</text>
                            </div>
                        </div>

                        {/* Icons */}
                        <div style={{
                            display: 'flex', 
                            flexDirection: 'row', 
                            justifyContent: 'flex-start',
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