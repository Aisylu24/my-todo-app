import React, {useEffect, useState} from 'react';
import {Task} from "../Task/Task";
import {db} from '../../api/firebase'
import {addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc} from 'firebase/firestore'
import {AddModal} from "../../common/components/Modalka/AddModal/AddModal";


export const Todolist = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        return onSnapshot(collection(db, "todos"), (querySnapshot) => {
            const data = querySnapshot.docs.map((query) => {
                return {...query.data(), id: query.id};
            });
            setTasks(data);
        });
    }, [])


    const createHandler = async (data) => {
        await addDoc(collection(db, 'todos'), {
            completed: false,
            description: data.description,
            expDate: data.expDate,
            file: data.file,
            fileName: data.fileName,
            title: data.title,
        })
    }

    const completedHandler = async (task) => {
        await updateDoc(doc(db, 'todos', task.id), {
            ...task,
            completed: !task.completed
        })
    }

    const updateHandler = async (task, taskID) => {
        await updateDoc(doc(db, 'todos', taskID), {
            completed: task.completed,
            description: task.description,
            expDate: task.expDate,
            file: task.file,
            fileName: task.fileName,
            title: task.title
        })
    }

    const deleteHandler = async (id) => {
        await deleteDoc(doc(db, 'todos', id))
    }

    return (
        <div>
            <h1>TODOLIST</h1>
            <div>`Tasks' amount: {tasks.length}`</div>
            <AddModal formTitle={'Create task'} buttonName={'Add new task'} createHandler={createHandler}/>
            <ul>
                {
                    tasks.map((task) => {
                        return <Task
                            task={task}
                            title={task.title}
                            description={task.description}
                            expDate={task.expDate}
                            completed={task.completed}
                            file={task.file}
                            fileName={task.fileName}
                            key={task.id}
                            id={task.id}
                            completedHandler={completedHandler}
                            updateHandler={updateHandler}
                            deleteHandler={deleteHandler}
                        />
                    })
                }
            </ul>
        </div>
    );
};

