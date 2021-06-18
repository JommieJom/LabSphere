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
                        text="Complete Lab programming assignments when you are ready."
                        label='Do Labs'
                        path='/course-up' 
                        />
                        <FeatureItem 
                        src="images/slogan3.png" 
                        text="Learn more about our project"
                        label='Learn more'
                        path='/' 
                        />
                    </ul>
                
                </div>
            </div>
            
        </div>
    )
}

export default Features;
