import React from 'react';
import { Link } from 'react-router-dom';

function CourseItem(props) {
    return (
        <>
        <li className="course_item">
            <Link className="course_item_link" to={props.path}>
                <figure className="course_item_pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="course Image" className="course_item_img" />
                </figure>
                <div className="course_item_info">
                    <h5 className="course_item_text">{props.text}</h5>
                </div>
            </Link>
        </li>
        </>
    )
}

export default CourseItem;
