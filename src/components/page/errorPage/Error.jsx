import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error=useRouteError();
    console.error(error)
    return (
        <div className='text-center mt-32'>
               <h1>Oops!</h1><progress className="progress w-56"></progress>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            
        </div>
    );
};

export default Error;