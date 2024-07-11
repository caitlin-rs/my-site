import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavBar } from '../components/NavBar';
import image from '../assets/smaller.png';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const ProjPage = () => {
    const [isPKVisible, setIsPKVisible] = useState(false);
    const [isSCVisible, setIsSCVisible] = useState(false);
    const [isTWVisible, setIsTWVisible] = useState(false);

    const toggleVisibility = () => {
        setIsPKVisible(!isPKVisible);
    };

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
                    paddingLeft: 40,
                    paddingRight: 40,
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
                                    <p class="font-paragraph" style={{ marginLeft: 20}}>○ A parking booking system app.</p>
                                    <p class="font-paragraph" style={{ marginLeft: 20}}>○ I worked mainly on the front-end development of this app.</p>
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
                            <p class="font-paragraph" style={{ marginLeft: 20}}>○ A Markdown note taking web app.</p>
                            <p class="font-paragraph" style={{ marginLeft: 20}}>○ I worked on and co-ordinated the front-end development of this web app.</p>
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
                            <p class="font-paragraph" style={{ marginLeft: 20}}>○ I worked on the entirety of this wedsite.</p>
                        </div>
                        </div>
                        }
                    </div>
                </div>
                
            </div>
        </div>
    );
};