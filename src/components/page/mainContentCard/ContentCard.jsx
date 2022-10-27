import React from 'react';
import { Link } from 'react-router-dom';


const ContentCard = ({ details,setLeftSide }) => {
    setLeftSide(details)
    const {name,picture,_id}=details;
    
    return (
        <div>
            <div className="card card-compact w-96 bg-stone-700 shadow-xl h-fit mb-6">
                <figure><img className='w-fit h-72' src={picture} alt="course" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>      
                    <div className="card-actions justify-end">
                        <button className="btn btn-success"><Link to={`/course/${_id}`}>Details More</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;