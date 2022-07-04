import React from 'react';
import Login from './Components/Login';
import Main from './Components/Main';
import './global.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    let navigate = useNavigate()

    return (
        <div>
            <Login />
        </div>
    );
}

export default App;
