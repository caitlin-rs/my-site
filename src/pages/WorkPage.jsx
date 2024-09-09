import React from 'react';
import { Helmet } from 'react-helmet';
import { NavBar } from '../components/NavBar';

export const WorkPage = () => {
    return (
        <div>
            <Helmet>
            <title>Experience</title>
            </Helmet>
            <NavBar/>

            <body className='image' style={{backgroundImage: `url(${require('../assets/2.jpg')})`, display: 'flex', flexDirection: 'row'}}>
                <div style={{ width: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'start', paddingLeft: 40, paddingRight: 40, paddingTop: 20, paddingBottom: 20}}>
                    <header class="font-header">Work Experience</header>
                    
                    <section className='BrightSparkz paragraph' class='paragraph-border-light'>
                        <header style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <p class="font-24">BrightSparkz Tutoring</p>
                            <p class="font-20">2022 - Present</p>
                        </header>
                        <subheader class="font-18">High school level tutor</subheader>
                        <p class="font-paragraph" style={{ marginLeft: 20}}>Subjects:</p>
                        <p class="font-paragraph" style={{ marginLeft: 20}}>○ Mathematics</p>
                        <p class="font-paragraph" style={{ marginLeft: 20}}>○ English</p>
                        <p class="font-paragraph" style={{ marginLeft: 20}}>○ Physics</p>
                        <p class="font-paragraph" style={{ marginLeft: 20}}>○ Computer Science</p>
                    </section>

                    <section className='US paragraph' class='paragraph-border-light' style={{marginTop: 20}}>
                        <header style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <p class="font-24">Stellenbosch University</p>
                            <p class="font-20">2023 - 2024</p>
                        </header>
                        <subheader class="font-18">Computer Science Tutor/Demi for CS113/4</subheader>
                        <p class="font-paragraph" style={{ marginLeft: 20}}>○ Conducted  Q&A sessions with up to 10 students.</p>
                        <p class="font-paragraph" style={{ marginLeft: 20}}>○ Assisted during tutorial sessions.</p>
                        <p class="font-paragraph" style={{ marginLeft: 20}}>○ Invigilated exam sessions.</p>
                    </section>
                </div>
            </body>
        </div>
    );
};