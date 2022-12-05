import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {Todolist} from "../../../features/Todolist/Todolist";
import {Login} from "../../../features/Login/Login";

export const Pages = () => {
    return  <Routes>
                <Route path={'/'} element={<Todolist/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path='404' element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path='/*' element={<Navigate to='404'/>}/>
            </Routes>
};

