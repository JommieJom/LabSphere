import React from 'react';
import ListItem from './ListItem';
import './ListLabsMenu.css';


function ListLabsMenu() {
    return (
        <div className="list_lab">
            <h1>Labs </h1>
            <div className="list_lab_container">
                <div className="list_lab_wrapper">
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Python Lab 1"
                            path='/editor'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Python Lab 2"
                            path='/'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Python Lab 3"
                            path='/editor'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Python Lab 4"
                            path='/'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Python Lab 5"
                            path='/'
                        />
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}

export default ListLabsMenu;
