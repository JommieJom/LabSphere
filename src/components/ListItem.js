import React from 'react';
import { Link } from 'react-router-dom';

function ListItem(props) {
    return (
        <>
        <li className="list_lab_item">
            <Link className="list_lab_item_link" to={props.path}>
                <div className="list_lab_item_info">
                    <h5 className="list_lab_item_text">{props.text}</h5>
                </div>

            </Link>
        </li>
        </>
    )
}

export default ListItem;
