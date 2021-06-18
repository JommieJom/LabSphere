import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Labs anywhere, anytime</h1>
            <p>The number 1 coding platform for KMITL Software Engineering students</p>
            <div className="hero-btns">
                <Link to='/' className='btn-mobile'>
                    <button type="button" class="btn btn-outline-light">GET STARTED</button>
                </Link>
                <Link to='/about-us' className='btn-mobile'>
                    <button type="button" class="btn btn-outline-light">LEARN MORE</button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
