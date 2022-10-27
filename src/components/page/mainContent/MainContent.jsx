import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ContentCard from '../mainContentCard/ContentCard';

const MainContent = () => {
    const [course,setCourse]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/course')
        .then(res=>res.json())
        .then(data =>{setCourse(data)})
    },[])
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
           {
            course.map((p,key )=> <ContentCard details={p} key={key}></ContentCard>)
           }
        </div>
    );
};

export default MainContent;