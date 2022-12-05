import React from 'react';
import {UpdateModal} from "../../common/components/Modalka/UpdateModal/UpdateModal";
import "./Task.css"


export const Task = (props) => {
    return (
        <li key={props.id} className={"task"}>
            <div>
                <input type="checkbox" checked={props.completed} onChange={() => props.completedHandler(props.task)}/>
                <span>{props.title}</span>
            </div>
            <span>{props.description}</span>
            <span>{props.expDate}</span>
            <a href={props.file} target="_blank">{props.fileName}
            </a>
            <div>
                <UpdateModal formTitle={'Update task'} buttonName={'Edit'} task={props.task}
                             updateHandler={props.updateHandler}/>
                <button onClick={() => props.deleteHandler((props.id))}>Delete</button>
            </div>
        </li>
    );
};