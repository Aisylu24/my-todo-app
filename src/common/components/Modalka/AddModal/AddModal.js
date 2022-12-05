import { useState } from 'react';
import Form from "../../Form/Form";

export const AddModal = ({formTitle, buttonName, createHandler}) => {

    const [modalActive, setModalActive] = useState(false);

    const [state, setState] = useState({
        title: '',
        description: '',
        expDate:'',
        file: '',
        fileName: ''
    })

    const onClickHandler = () => {
        if (state.title === '') {
            alert('Title is required')
            return
        }
        createHandler(state)
        setState({
                title: '',
                description: '',
                expDate:'',
                file: '',
                fileName: ''
            }
        )
        setModalActive(false)
    }

    const cancelHandler = () => {
        setState({
                title: '',
                description: '',
                expDate:'',
                file: '',
                fileName: ''
            }
        )
    }

    return  <Form
        cancelHandler={cancelHandler}
        formTitle={formTitle}
        buttonName={buttonName}
        modalActive={modalActive}
        setModalActive={setModalActive}
        state={state}
        setState={setState}
        onClickHandler={onClickHandler}
    />
}