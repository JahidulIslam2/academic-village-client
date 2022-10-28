import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideContent = ({ course}) => {

    return (
        <div><label htmlFor="my-drawer-2" className="drawer-overlay">
            <ul className="menu p-4 overflow-y-auto lg:w-80 sm:w-auto bg-base-100 text-base-content">
                <li><Link to="/courses">{course.name}</Link></li>
            </ul>
            </label>
        </div> 
    );
};

export default LeftSideContent;