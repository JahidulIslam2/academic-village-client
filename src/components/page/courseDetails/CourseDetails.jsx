import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaReadme } from 'react-icons/fa';
import { Pdf } from "react-to-pdf";
import { useRef,Ref } from 'react';

const CourseDetails = () => {
  const details = useLoaderData();
  const { email, name, phone, picture, title,_id} = details;
  return (<>
    <div useRef={Ref} className=" bg-slate-500 shadow-xl lg:w-full sm:w-auto lg:h-20 sm:h-9 mt-10 rounded-sm border-collapse shadow-slate-400 pt-5">
      <div className="">
        <div className="card-actions justify-center "><FaReadme className='h-12 lg:w-20 sm:w-10 text-white text-center'></FaReadme>
          <h1 className='text-cyan-100 lg:text-4xl sm:text-2xl text-center font-semibold'>{name}</h1>
        </div>
      </div>
    </div>
    <div className='lg:m-96 lg:mt-5 sm:m-14'>
      <div className="card card-compact bg-cyan-800 shadow-xl h-screen mb-6">
        <figure><img className='w-fit h-72' src={picture} alt="course" /></figure>
        <div className="card-body">
          <h2 className="card-title text-black text-3xl">{name}</h2>
          <p>Email: {email}</p>
          <p>phone: {phone}</p>
          <p className='text-white'>{title}</p>
          <div className="card-actions justify-center">
            <Pdf target={Ref} filename="Course.pdf">
            {({toPdf})=><button onClick={toPdf} className='btn btn-primary'>Download pdf</button>}
            </Pdf>
            <button className="btn btn-success bg-green-500"><Link to={`/checkout/${_id}`}>Premium Access </Link></button>
          </div>

        </div>
      </div>
    </div>
  </>
  );
};

export default CourseDetails;