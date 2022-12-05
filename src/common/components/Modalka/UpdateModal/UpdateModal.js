import {useState} from 'react';
import Form from "../../Form/Form";

export const UpdateModal = ({formTitle, buttonName, updateHandler, task}) => {

    const [modalActive, setModalActive] = useState(false);

    const [state, setState] = useState({
        completed: task.completed,
        description: task.description,
        expDate: task.expDate,
        file: task.file,
        fileName: task.fileName,
        title: task.title
    })

    const onClickHandler = () => {
        if (state.title === '') {
            alert('Title is required')
            return
        }
        updateHandler(state, task.id)
        setModalActive(false)
    }


    const cancelHandler = () => {
        setState({
            completed: task.completed,
            description: task.description,
            expDate: task.expDate,
            file: task.file,
            fileName: task.fileName,
            title: task.title
        })
    }

    return (
        <Form
            cancelHandler={cancelHandler}
            formTitle={formTitle}
            buttonName={buttonName}
            modalActive={modalActive}
            setModalActive={setModalActive}
            state={state}
            setState={setState}
            onClickHandler={onClickHandler}
        />
    );
}