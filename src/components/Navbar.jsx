import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
    }, [location])
    return (
        <div className='navbar' id={expandNavbar ? "open" : "close"}>

            <div className='title'>
                <h2>Personal <span>Portfolio</span></h2>
            </div>
            <div className='links'>
                <Link to={'/'}>Home</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
            <div className='toggle'>
                <button onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}>
                    <img src="/images/menu.png" />
                </button>
            </div>
        </div>
    )
}

export default Navbar