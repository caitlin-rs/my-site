import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavBar } from '../components/NavBar';
import image from '../assets/smaller.png';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const ProjPage = () => {
    const [isPKVisible, setIsPKVisible] = useState(false);
    const [isSCVisible, setIsSCVisible] = useState(false);
    const [isTWVisible, setIsTWVisible] = useState(false);
    const [isJNVisible, setIsJNVisible] = useState(false);

    const styles = {
        body: {
          backgroundImage: `url(${require('../assets/red-smaller.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        },
    };
    return (
        <div>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <NavBar/>

            <div style={styles.body}>
                <div style={{
                    width: '700px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 40
                }}>
                    <header class="font-header">Academic Projects</header>

                    {/* Parkaide */}
                    <div className='Parkaide paragraph' class='paragraph-border-light' onClick={() => setIsPKVisible(!isPKVisible)}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <p class="font-24">Parkaide</p>
                            <p class="font-button">React Native | TypeScript | React Native Paper</p>
                            {isPKVisible ? <IoIosArrowUp style={{cursor: 'pointer'}} size={30}/> : <IoIosArrowDown style={{cursor: 'pointer'}} size={30}/>}
                        </div>
                    
                        {isPKVisible && 
                            <div>
                                <div style={{marginTop: 10}}>
                                    <p class="font-paragraph" style={{ marginLeft: 20}}>Parkaide is a mobile application for parking bookings that allows building managers to upload parking maps, enabling users to reserve parking bays. I contributed to the frontend development and its integration with the database.</p>
                                </div>
                            </div>
                        }
                    </div>
                   
                    {/* Scribble.md */}
                    <div className='Scribble paragraph' class='paragraph-border-light' onClick={() => setIsSCVisible(!isSCVisible)} style={{marginTop: 20}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <p class="font-24">Scribble.md</p>
                            <p class="font-button">React | JavaScript | Tailwind CSS</p>
                            {isSCVisible ? <IoIosArrowUp style={{cursor: 'pointer'}} size={30}/> : <IoIosArrowDown style={{cursor: 'pointer'}} size={30}/>}
                        </div>
                        
                        {isSCVisible && 
                            <div>
                        <div style={{marginTop: 10}}>
                            <p class="font-paragraph" style={{ marginLeft: 20}}>Scribble.md is a Markdown note-taking web application that enables editing, previewing, and saving of Markdown files. Developed collaboratively, my primary focus was on frontend development and integrating the frontend with the database when necessary. This project enhanced my understanding of web development and provided me with a foundational knowledge of PostgreSQL.</p>
                        </div>
                        </div>
                        }
                    </div>

                    {/* Networking */}
                    <div className='Parkaide paragraph' class='paragraph-border-light' onClick={() => setIsJNVisible(!isJNVisible)} style={{marginTop: 20}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <p class="font-24">Java Networking Applications</p>
                            <p class="font-button">Java | JavaFX</p>
                            {isJNVisible ? <IoIosArrowUp style={{cursor: 'pointer'}} size={30}/> : <IoIosArrowDown style={{cursor: 'pointer'}} size={30}/>}
                        </div>
                    
                        {isJNVisible && 
                            <div>
                                <div style={{marginTop: 10}}>
                                    <p class="font-paragraph" style={{ marginLeft: 20}}>I collaborated with peers to develop various networking applications in Java, utilizing a range of networking concepts. Through this experience, I deepened my knowledge of Java's networking capabilities and gained a solid understanding of JavaFX.</p>
                                </div>
                            </div>
                        }
                    </div>
                    
                    <header class="font-header" style={{marginTop: 40}}>Personal Projects</header>
                    {/* My Site */}
                    <div className='my-site paragraph' class='paragraph-border-light' onClick={() => setIsTWVisible(!isTWVisible)}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <p class="font-24">This Website</p>
                            <p class="font-button" style={{color: 'white'}}>React | JavaScript | Tailwind CSS</p>
                            {isTWVisible ? <IoIosArrowUp style={{cursor: 'pointer'}} size={30}/> : <IoIosArrowDown style={{cursor: 'pointer'}} size={30}/>}
                        </div>
                        
                        {isTWVisible && 
                            <div>
                        <div style={{marginTop: 10}}>
                            <p class="font-paragraph" style={{ marginLeft: 20}}>I created this website as a personal project. I developed it entirely and it is hosted via GitHub pages.</p>
                        </div>
                        </div>
                        }
                    </div>
                </div>
                
            </div>
        </div>
    );
};