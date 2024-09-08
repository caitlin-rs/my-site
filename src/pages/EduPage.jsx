import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavBar } from '../components/NavBar';
import '../styles/CommonStyles.css'
import { FaJava, FaPython, FaListUl } from "react-icons/fa";
import { SiGnubash, SiTypescript, SiJavascript, SiJetbrains, SiCanva } from "react-icons/si";
import { DiEclipse, DiGithubBadge, DiGit, DiHtml5, 
    DiLinux, DiReact, DiTrello, DiVisualstudio, DiVim, DiNodejs, 
    DiTerminal, DiWindows, DiCss3} from "react-icons/di";
import { BiLogoGitlab } from "react-icons/bi";
import { PiSquaresFour } from "react-icons/pi";
import { TbSql } from "react-icons/tb";
import { BsCSquare } from "react-icons/bs";

export const EduPage = () => {

    const [isListView, setIsListView] = useState(false);
    const handleViewChange = () => {
        setIsListView(!isListView);
    };
      
    return (
        <div>
            <Helmet>
            <title>Education</title>
            </Helmet>
            <NavBar/>

            <div className='image' style={{backgroundImage: `url(${require('../assets/3.jpg')})`, height: '100%'}}>
            <div className='edu-container'>s
                {/* Education */}
                <div className='edu-sub-container'>
                    
                    <header class="font-header">Education</header>
                    
                    <div className='US paragraph' style={{marginTop: 20}}>
                        <p class="font-24">BSc Bioinformatics and Computational Biology</p>
                        <p class="font-18">Stellenbosch University</p>
                        <p class="font-paragraph" style={{ marginTop: 5, marginLeft: 20}}>Completed with majors in Bioinformatics, Computer Science and Computational Biology</p>
                    </div>
                    
                    <div className='US paragraph' style={{marginTop: 20}}>
                        <p class="font-24">CBCB Internship</p>
                        <p class="font-18">Stellenbosch University</p>
                        <p class="font-paragraph" style={{ marginTop: 5, marginLeft: 20}}>I Worked with fellow students to assembly the genome of a Fischer Love Bird (Nel) using a variety of bioinformatical tools.</p>
                        
                        <p class="font-paragraph" style={{ marginTop: 5, marginLeft: 20}}>I gained experience working with HPCs and BASH Scripting.</p>
                        
                    </div>
                </div>

                {/* Skills */}
                <div className='edu-grid-container'>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <header class="font-header">Skills</header>
                            {!isListView ?
                                <button style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} onClick={handleViewChange}>
                                    <FaListUl color='white' size={20}/>
                                </button>
                                :
                                <button style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} onClick={handleViewChange}>
                                    <PiSquaresFour color='white' size={30}/>
                                </button>
                            }
                        </div>
                        {!isListView ?
                        /* Tile View */
                        <div>
                            {/* Languages */}
                            <p className='font-18'>Languages</p>
                            <div className="grid-container">
                                <div className="grid-item"><FaJava size='45'/></div>
                                <div className="grid-item"><FaPython size='45'/></div>
                                <div className="grid-item"><SiGnubash size='45'/></div>
                                <div className="grid-item"><DiHtml5 size='45'/></div>
                                <div className="grid-item"><DiCss3 size='45'/></div>
                                <div className="grid-item"><SiJavascript size='45'/></div>
                                <div className="grid-item"><SiTypescript size='45'/></div>
                                <div className="grid-item"><TbSql size='45'/></div>
                                <div className="grid-item"><BsCSquare size='45'/></div>
                            </div>
                            {/* Frameworks */}
                            <p className='font-18'>Frameworks</p>
                            <div className="grid-container">
                                <div className="grid-item"><DiNodejs size='45'/></div>
                                <div className="grid-item"><DiReact size='45'/></div>
                            </div>
                            {/* Development */}
                            <p className='font-18'>Development</p>
                            <div className="grid-container">
                                <div className="grid-item"><DiEclipse size='45'/></div>
                                <div className="grid-item"><DiVisualstudio size='45'/></div>
                                <div className="grid-item"><DiVim size='45'/></div>
                                <div className="grid-item"><SiJetbrains size='45'/></div>
                                <div className="grid-item"><DiTerminal size='45'/></div>

                                <div className="grid-item"><DiGit size='45'/></div>
                                <div className="grid-item"><DiGithubBadge size='45'/></div>
                                <div className="grid-item"><BiLogoGitlab size='45'/></div>

                                <div className="grid-item"><DiLinux size='45'/></div>
                                <div className="grid-item"><DiWindows size='45'/></div>

                                <div className="grid-item"><DiTrello size='45'/></div>
                                <div className="grid-item"><SiCanva size='45'/></div>
                            </div>
                        </div> : 
                        /* List View */
                        <div>
                            {/* Languages */}
                            <p className='font-18'>Languages</p>
                            <li style={{color: 'white', fontSize: 16}}>Java</li>
                            <li style={{color: 'white', fontSize: 16}}>Python</li>
                            <li style={{color: 'white', fontSize: 16}}>C</li>
                            <li style={{color: 'white', fontSize: 16}}>HTML</li>
                            <li style={{color: 'white', fontSize: 16}}>CSS</li>
                            <li style={{color: 'white', fontSize: 16}}>JavaScript</li>
                            <li style={{color: 'white', fontSize: 16}}>TypeScript</li>
                            <li style={{color: 'white', fontSize: 16}}>BASH Scripting</li>
                            {/* Frameworks */}
                            <p className='font-18' style={{paddingTop: 10}}>Frameworks</p>
                            <li style={{color: 'white', fontSize: 16}}>React</li>
                            <li style={{color: 'white', fontSize: 16}}>React Native</li>
                            <li style={{color: 'white', fontSize: 16}}>Node.js</li>
                            {/* Development */}
                            <p className='font-18' style={{paddingTop: 10}}>Development</p>
                            <p className='font-button' style={{color: 'white'}}>IDEs</p>
                            <li style={{color: 'white', fontSize: 16}}>VScode</li>
                            <li style={{color: 'white', fontSize: 16}}>Eclipse</li>
                            <li style={{color: 'white', fontSize: 16}}>Vim/NeoVim</li>
                            <li style={{color: 'white', fontSize: 16}}>JetBrains</li>

                            <p className='font-button' style={{color: 'white'}}>CI/CD</p>
                            <li style={{color: 'white', fontSize: 16}}>Git</li>
                            <li style={{color: 'white', fontSize: 16}}>GitHub/GitLab</li>

                            <p className='font-button' style={{color: 'white'}}>Systems</p>
                            <li style={{color: 'white', fontSize: 16}}>Linux</li>
                            <li style={{color: 'white', fontSize: 16}}>Windows</li>
                            <li style={{color: 'white', fontSize: 16}}>Terminal</li>

                            <p className='font-button' style={{color: 'white'}}>Project Management</p>
                            <li style={{color: 'white', fontSize: 16}}>Agile</li>
                            <li style={{color: 'white', fontSize: 16}}>Trello</li>
                        </div>
                        }
                </div>
            </div> 
            </div>
    
        </div>
    );
};