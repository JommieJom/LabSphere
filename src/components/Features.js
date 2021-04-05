import React from 'react';
import FeatureItem from './FeatureItem';
import './Features.css';

function Features() {
    return (
        <div className="features">
            <h1>Features!</h1>
            <div className="features_container">
                <div className="features_wrapper"> 
                    <ul className="features_items">
                        <FeatureItem 
                        src="images/slogan1.png" 
                        text="Complete all the programming labs Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae rhoncus mi, eu interdum nulla. Vestibulum pulvinar enim augue, a suscipit leo blandit a. In maximus a risus et fermentum."
                        label='Learn Music'
                        path='/learn-up' 
                        />
                        <FeatureItem 
                        src="images/slogan3.png" 
                        text="Track your progress Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae rhoncus mi, eu interdum nulla. Vestibulum pulvinar enim augue, a suscipit leo blandit a. In maximus a risus et fermentum."
                        label='Quiz Yourself'
                        path='/quiz-up' 
                        />
                    </ul>
                
                </div>
            </div>
            
        </div>
    )
}

export default Features;
