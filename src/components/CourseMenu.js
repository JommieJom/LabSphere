import React from 'react';
import CourseItem from './CourseItem';
import './CourseMenu.css';

function CourseMenu() {
    return (
        <div className="course">
            <h1>courses!</h1>
            <div className="course_container">
                <div className="course_wrapper">
                    <ul className="course_items">
                        <CourseItem
                            src="images/pythonLogo.png"
                            text="Python Lab is very fun by DocV"
                            label='Python Lab'
                            path='/lab-list'
                        />
                        <CourseItem
                            src="images/c++Logo.png"
                            text="Object Oriented Programming C++ is very fun by Doc.Ugrit"
                            label='OOP Lab'
                            path='/lab-list'
                        />

                    </ul>

                    <ul className="course_items">
                        <CourseItem
                            src="images/javaLogo.png"
                            text="Still with me?, Design P A T TERN"
                            label='Java'
                            path='/'
                        />
                        <CourseItem
                            src="images/swiftLogo.png"
                            text="Very cleaned"
                            label='Swift'
                            path='/'
                        />
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default CourseMenu;
