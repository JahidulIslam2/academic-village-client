import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideContent from '../leftSideContent/LeftSideContent';
import MainContent from '../mainContent/MainContent';

const Courses = () => {
    const courses =useLoaderData();

    return (
        <div className="my-6">
            <div className="flex w-full max-h-max ">

                <div className='flex-grow border place-items-start max-w-xs pb-56'>
                     <div className="drawer drawer-mobile">
                {/* <input id="my-drawer-2" type="checkbox" className="drawer-toggle" /> */}
                {/* <div className="drawer-content flex flex-col items-start justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div> */}
                <div className="drawer-side">
                    
                    {
                        courses.map((course,id) => <LeftSideContent course={course} key={id}></LeftSideContent>)
                    }

                </div>
            </div>
                
                </div>
                <div className='border flex-grow place-items-end max-w-full'>
                  <MainContent></MainContent>
                </div>
            </div>
        </div>
    );
};

export default Courses;