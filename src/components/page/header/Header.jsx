import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <div className="navbar bg-amber-900 shadow-lg">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">Learn English</Link>
                <img src="icon1.png" alt="" />

                </div>
                <div className="flex">
                    <div className="dropdown dropdown-end">
                        <nav className='flex lg:space-x-7 md:space-x-7 sm:flex-none sm:space-x-2 mr-5'>
                            <Link className="link link-primary">Courses</Link>
                            <Link className="link link-primary">Faq</Link>
                            <Link className="link link-primary">Blog</Link>
                            <Link className="link link-primary">Contact</Link>
                            <Link className="link link-secondary" to="/signUp">SignUp</Link>
                            <Link className="link link-secondary" to="/login">Login</Link>
                            <input type="checkbox" className="toggle" defaultChecked checked />
                        </nav>
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip="hello">
                            <div className="w-10 rounded-full " >

                                <img src="https://placeimg.com/80/80/people" alt='' />

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
                            <li><Link>Logout</Link></li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;