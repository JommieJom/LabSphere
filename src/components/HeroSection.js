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
            <p>The number1 coding platform for KMITL Software Engineering students</p>
            <div className="hero-btns">
                <Link to='/learn-up' className='btn-mobile'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                </Link>
                <Link to='/about-us' className='btn-mobile'>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>LEARN MORE</Button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
