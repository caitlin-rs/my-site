import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavBar } from '../components/NavBar';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const ProjPage = () => {
    const [isPKVisible, setIsPKVisible] = useState(false);
    const [isSCVisible, setIsSCVisible] = useState(false);
    const [isTWVisible, setIsTWVisible] = useState(false);
    const [isJNVisible, setIsJNVisible] = useState(false);

    return (
        <div>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <NavBar/>

            <div className='image'>
                <div className='proj-container'>
                    <header class="font-header">Academic Projects</header>

                    {/* Parkaide */}
                    <div className='Parkaide paragraph' class='paragraph-border-light' onClick={() => setIsPKVisible(!isPKVisible)}>
                        <div className='proj-sub-container'>
                            <p class="font-24">Parkaide</p>
                            <p class="font-proj">React Native | TypeScript | React Native Paper</p>
                            {isPKVisible ? <IoIosArrowUp style={{cursor: 'pointer'}} size={30}/> : <IoIosArrowDown style={{cursor: 'pointer'}} size={30}/>}
                        </div>
                    
                        {isPKVisible && 
                            <div>
                                <div style={{marginTop: 10}}>
                                    <p class="font-paragraph" style={{ marginLeft: 20}}>Parkaide is a mobile application for parking bookings that allows building managers to upload parking maps, enabling users to reserve parking bays. I contributed to the frontend development and its integration with the backend. This project provided me with experience in React app development, giving me the skills to create dynamic user interfaces.</p>
                                </div>
                            </div>
                        }
                    </div>
                   
                    {/* Scribble.md */}
                    <div className='Scribble paragraph' class='paragraph-border-light' onClick={() => setIsSCVisible(!isSCVisible)} style={{marginTop: 20}}>
                        <div className='proj-sub-container'>
                            <p class="font-24">Scribble.md</p>
                            <p class="font-proj">React | JavaScript | Tailwind CSS | GraphQL</p>
                            {isSCVisible ? <IoIosArrowUp style={{cursor: 'pointer'}} size={30}/> : <IoIosArrowDown style={{cursor: 'pointer'}} size={30}/>}
                        </div>
                        
                        {isSCVisible && 
                            <div>
                        <div style={{marginTop: 10}}>
                            <p class="font-paragraph" style={{ marginLeft: 20}}>Scribble.md is a Markdown note-taking web application. Developed collaboratively, my primary focus was on frontend development, including querying the backend for frontend components. This project enhanced my understanding of web development and provided me with foundational knowledge of GraphQL querying.</p>
                        </div>
                        </div>
                        }
                    </div>

                    {/* Networking */}
                    <div className='Parkaide paragraph' class='paragraph-border-light' onClick={() => setIsJNVisible(!isJNVisible)} style={{marginTop: 20}}>
                        <div className='proj-sub-container'>
                            <p class="font-24">Java Networking Applications</p>
                            <p class="font-proj">Java | JavaFX</p>
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
                        <div className='proj-sub-container'>
                            <p class="font-24">This Website</p>
                            <p class="font-proj" style={{color: 'white'}}>React | JavaScript | Tailwind CSS</p>
                            {isTWVisible ? <IoIosArrowUp style={{cursor: 'pointer'}} size={30}/> : <IoIosArrowDown style={{cursor: 'pointer'}} size={30}/>}
                        </div>
                        
                        {isTWVisible && 
                            <div>
                        <div style={{marginTop: 10}}>
                            <p class="font-paragraph" style={{ marginLeft: 20}}>I created this personal website as an easily accessible version of my CV. It is a static website hosted via GitHub pages.</p>
                        </div>
                        </div>
                        }
                    </div>
                </div>
                
            </div>
        </div>
    );
};