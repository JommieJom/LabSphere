import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            {/*
            <section className="footer-subscription">
                <p className="footer-subscription-heading">Join the adventure</p>
                <p className="footer-subscription-text">at any time</p>
                <div className="input-areas">
                    <form>
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            className='footer-input'
                        />
                        <Button buttonStyle='btn--out;ine'>Subscribe</Button>

                    </form>

                </div>
            </section>
            */}
            <section className="social-media">
                <div>
                    <div className="social-medi-wrap">
                        <div className="footer-logo">
                            <Link className="social-logo">
                                SE Lab Sphere<i class="fas fa-laptop" />
                            </Link>
                        </div>
                        <small className='website-rights'>SE Lab 2020</small>
                        <div class='social-icons'>
                            <Link
                                class='social-icon-link facebook'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <i class='fab fa-facebook-f' />
                            </Link>
                            <Link
                                class='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i class='fab fa-instagram' />
                            </Link>
                            <Link
                                class='social-icon-link youtube'
                                to='/'
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <i class='fab fa-youtube' />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <i class='fab fa-twitter' />
                            </Link>
                            <Link
                                class='social-icon-link linkedin'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <i class='fab fa-linkedin' />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Explore</h2>
                        <Link to="/sign-up">Home</Link>
                        <Link to="/">About</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Legal</h2>
                        <Link to="/sign-up">Terms</Link>
                        <Link to="/">Privacy</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Services</h2>
                        <Link to="/sign-up">Support</Link>
                        <Link to="/">Events</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
