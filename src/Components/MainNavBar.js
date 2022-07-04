import React from 'react';
import { useDispatch , useSelector } from "react-redux";
import { authActions } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { FiLogOut, FiHome} from 'react-icons/fi'

const MainNavBar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authState = useSelector((state) => {
      return state.auth
    })

    const logoutHandler = () => {
        dispatch(authActions.logout());
        navigate("/");
      };

    const homeNavigateHandler = () => {
        navigate('/home')
    }

    return (
        <div>
        <div className="main-header">
        <div className="main-header-content">
          <h1 className="app-name">Alert Management</h1>
          <div className='d-flex align-items-center gap-3'>
          <Button variant='warning' onClick={homeNavigateHandler} className=""><FiHome /></Button>
          <Button variant='danger' onClick={logoutHandler} className=''><FiLogOut /></Button>
          <p style={{margin:0 , padding : 0}} className="btn btn-primary p-2 m-2" >{authState.firstName }</p>
          </div>
        </div>
      </div>
        </div>
    );
}

export default MainNavBar;
