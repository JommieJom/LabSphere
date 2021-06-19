import React from 'react';
import { Link } from 'react-router-dom';

function FeatureItem(props) {
    return (
        <>
        <li className="features_item">
            <Link className="features_item_link" to={props.path}>
                <figure className="features_item_pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Features Image" className="features_item_img" />
                </figure>
                <div className="features_item_info">
                    <h5 className="features_item_text">{props.text}</h5>
                </div>

            </Link>
        </li>
        </>
    )
}

export default FeatureItem;
