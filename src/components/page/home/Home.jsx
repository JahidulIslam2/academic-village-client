import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://oneminuteenglish.org/wp-content/uploads/2020/04/Learn-1.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-black">Welcome <span className='text-cyan-600'>Learn English</span> Course</h1>
                        <p className="mb-5 text-black font-medium">Live online classes with expert teachers: Boost your English skills and confidence.You can learn English by taking face-to-face lessons in our teaching centres or at home via our online courses and learning tools.
                            People also ask</p>
                        <Link to="/courses"><button className="btn btn-success">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;