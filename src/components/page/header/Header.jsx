import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProvideAuthContext } from '../../provideAuth/ProvideAuth';
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    const {user,signOutHandle}=useContext(ProvideAuthContext)
    
    const logOutButton=()=>{
        signOutHandle()
        .then(()=>{})
        .catch((error)=>{console.error(error)})
    }
    return (
        <div>

            <div className="navbar bg-cyan-900 shadow-lg">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">Learn English</Link>
                    <img src="icon.jpg" className="mr-3 h-8 sm:h-9" alt="Learn English Course" />

                </div>
                <div className="flex">
                    <div className="dropdown dropdown-end">
                        <nav className='flex lg:space-x-7 md:space-x-7 sm:flex-none sm:space-x-2 mr-5'>
                            <Link className="link link-primary" to="/courses">Courses</Link>
                            <Link className="link link-primary">Faq</Link>
                            <Link className="link link-primary" to="/blog">Blog</Link>
                            <Link className="link link-primary">Contact</Link>
                            {user?.uid ?
                            <button onClick={logOutButton}>Log Out</button>
                            :
                            <Link className="link link-secondary" to="/login">Login</Link>
                            }
                            <input type="checkbox" className="toggle" defaultChecked checked />
                        </nav>
                    </div>

                    <div className="dropdown dropdown-end">
                      
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <div className="w-10 rounded-full " >
                                {user?.photoURL ?
                                <img src={user?.photoURL} alt='' />
                                :
                                <FaRegUserCircle className='w-auto h-10 '/>}
                                
                            </div>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                           


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;