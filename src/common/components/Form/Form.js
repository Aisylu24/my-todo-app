import React from 'react';
import './Form.css'
import {Modal} from "../Modalka/Modal/Modal";

const Form = ({formTitle, buttonName, modalActive, setModalActive, state, setState, onClickHandler, cancelHandler}) => {

    const uploadHandler = (e) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            if (file.size < 4000000) {
                convertFileToBase64(file, (file64) => {
                    setState({...state, file: file64, fileName: file.name})
                })
            } else {
                console.error('Error: ', 'Файл слишком большого размера')
            }
        }
    }

    const convertFileToBase64 = (file, callBack) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const file64 = reader.result
            callBack(file64)
        }
        reader.readAsDataURL(file)
    }

    return (
        <div>
            <header>
                <button onClick={() => setModalActive(true)}>
                    {buttonName}
                </button>
                <Modal active={modalActive} setActive={setModalActive} cancelHandler={cancelHandler}>
                    <div className="form">
                            <h1>{formTitle}</h1>
                                <input
                                    value={state.title}
                                    onChange={(e)=>  setState({...state, title: e.currentTarget.value})}
                                    type="text"
                                    placeholder="Title"
                                    className="field"
                                />
                                <textarea
                                    value={state.description}
                                    onChange={(e)=> setState({...state, description: e.currentTarget.value})}
                                    placeholder="Description"
                                    className="field"
                                />
                                <input
                                    value={state.expDate}
                                    onChange={(e) =>  setState({...state, expDate: e.target.value})}
                                    type="date"
                                    className="field"
                                />
                                <input
                                    onChange={uploadHandler}
                                    type="file"
                                    className="field"
                                />
                                <button type="submit" className="formButton" onClick={onClickHandler}
                                >{buttonName}</button>
                    </div>
                </Modal>
            </header>
        </div>
    );
};

export default Form;