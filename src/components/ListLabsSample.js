import React from 'react';
import ListItem from './ListItem';
import './ListLabsMenu.css';


function ListLabsSample() {
    return (
        <div className="list_lab">
            <h1>Java Labs sample </h1>
            <div className="list_lab_container">
                <div className="list_lab_wrapper">
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Java Lab 1 Question and samples"
                            path='/question-editor/1'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Java Lab 2 Question and samples"
                            path='/question-editor/2'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Java Lab 3 Question and samples"
                            path='/question-editor/2'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Java Lab 4 Question and samples"
                            path='/question-editor/2'
                        />
                    </ul>
                    <ul className="list_lab_items">
                        <ListItem
                            src=""
                            text="Java Lab 5 Question and samples"
                            path='/question-editor/2'
                        />
                    </ul>
                    <ul className="list_lab_add_item">
                        <ListItem
                            src=""
                            text="+"
                            path=''
                        />
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}

export default ListLabsSample;
