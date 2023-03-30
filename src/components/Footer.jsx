import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <h2 className='pr'>OUSSAMA GHOUNANE Portfolio</h2>
            <p>I'm OUSSAMA GHOUNANE, i'm passionate about programming,<br /> welcome to my portfolio.</p>
            <div className='email'>
                <h3><Link to={"/contact"}>Send me an Email</Link></h3>
            </div>
            <p>Contact Me in : </p>
            <div className='icos'>
                <Link to={'https://github.com/OussamaGhounane'}><img src="/images/github-white.png" /></Link>
                <Link to={'https://web.facebook.com/oussama.ghounane'}><img src="/images/facebook.png" /></Link>
                <Link to={'https://www.instagram.com/oussamaghounane/'}><img src="/images/instagram.png" /></Link>
                <Link to={'https://www.linkedin.com/in/ghounane-oussama-946586230/'}><img src="/images/linkedin-white.png" /></Link>
            </div>
            <p className='copyr'>&copy; Copyright 2023, OussamaGhounane</p>
        </div>
    )
}

export default Footer