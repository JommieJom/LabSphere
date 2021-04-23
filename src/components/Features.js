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
                        text="Complete all the programming labs Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae rhoncus mi, eu interdum nulla."
                        label='Do Labs'
                        path='/course-up' 
                        />
                        <FeatureItem 
                        src="images/slogan3.png" 
                        text="Track your progress Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae rhoncus mi, eu interdum nulla."
                        label='Track progress'
                        path='/' 
                        />
                    </ul>
                
                </div>
            </div>
            
        </div>
    )
}

export default Features;
