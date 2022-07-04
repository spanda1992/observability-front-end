import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Protected = (props) => {

    const authState = useSelector((state) => {
        return state.auth
    })

    if(authState.isAuth){
        return (
            <div>
                {props.children}
            </div>
        );
    }else{
        return (
            <Navigate to='/' />
        )
    }
}

export default Protected;
