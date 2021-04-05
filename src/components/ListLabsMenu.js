import React from 'react';
import ListItem from './ListItem';
import './ListLabsMenu.css';


function ListLabsMenu() {
    return (
        <div className="list_lab">
            <h1>Labs List</h1>
            <div className="list_lab_container">
                <div className="list_lab_wrapper">
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Python Lab 1"
                            path='/'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="C++ Lab2"
                            path='/'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Java Lab1"
                            path='/'
                        />
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}

export default ListLabsMenu;
