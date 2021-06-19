import React from 'react';
import ListItem from './ListItem';
import './ListLabsMenu.css';


function ListLabsMenu() {
    return (
        <div className="list_lab">
            <h1>Labs</h1>
            <div className="list_lab_container">
                <div className="list_lab_wrapper">
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Java Lab 1"
                            path='/code-editor'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Java Lab 2"
                            path='/'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Java Lab 3"
                            path='/editor'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Java Lab 4"
                            path='/'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Java Lab 5"
                            path='/'
                        />
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}

export default ListLabsMenu;
