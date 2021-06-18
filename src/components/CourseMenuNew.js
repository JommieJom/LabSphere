import React, {useEffect, useState} from 'react';
import CreateTask from './CreateTask';
import Card from './CardNoEdit';
import './CourseMenuEditor.css';
import CardNoEdit from './CardNoEdit';


const CourseMenuNew = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    return (
        <>
            <div className = "header text-center">
                <h3>Student Lab</h3>

            </div>
            <div className = "task-container">
                {taskList && taskList.map((obj , index) => <CardNoEdit taskObj = {obj} index = {index}/> )}
            </div>
        </>
    );
};

export default CourseMenuNew;