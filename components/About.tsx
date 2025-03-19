'use client';
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Experience",
        id: "experience", 
        content: ( 
        <ul>
            <li>3.5+ years as a Software Engineer at Terias Consulting Pvt Ltd</li> 
        </ul>
        ),
    },
    {
        title: "Skills",
        id: "skills", 
        content: ( 
        <ul>
            <li>HTML, CSS, JavaScript, React, NextJS</li> 
            <li>Java, NestJS, MongoDB, SQL</li> 
            <li>NodeJs</li>
        </ul>
        ),
    },
    {
        title: "Education",
        id: "education", 
        content: ( 
        <ul>
            <li>Curtin University(SLIIT)</li> 
            <li>Primary & Secondary Education - Southlands College Galle</li> 
        </ul>
        ),
    }
];

const About = () => {
    const [tab,setTab] = useState("experience");
    const [isPending, startTransition ] = useTransition();
  
    const handleTabChange = (id:any) => {
        startTransition(()=>{
            setTab(id);
        });
    };
    
    return (
    <section className='text-black bg-yellow-300 h-screen' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <img src='/irushi-SE-1.png' />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I am a full stack web developer with a passion for creating interactive and responsive web applications. 
                    I have experience working with JavaScript, React, Node. js, HTML, CSS, and Git. 
                    I am a quick learner and I am always looking to expand my knowledge and skill set. 
                    I am a team player and I am excited to work with others to create amazing applications. 
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={()=>handleTabChange('experience')} active={tab==='experience'}>{" "}Experience{" "}</TabButton>
                    <TabButton selectTab={()=>handleTabChange('skills')} active={tab==='skills'}>Skills </TabButton>
                    <TabButton selectTab={()=>handleTabChange('education')} active={tab==='education'}>{" "}Education{" "}</TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
            </div>
        </div>
    </section>
  )
}

export default About