import React from 'react';
import { NavLink } from "react-router-dom"
import '../Styles/Menu.css'
import Sidebar from './Sidebar';


const Menu = (props) => {

    const infraClickHandler = () => {
        props.chooseMenu('infra_alerts')
    }
    const entitiesClickHandler = () => {}
    const settingsClickHandler = () => {}
    const runbookClickHandler = () => {}
    const incidentsClickHandler = () => {}
    const analyticsClickHandler = () => {}
    const hittersClickHandler = () => {}
    const polciesClickHandler = () => {}

    return (
        <div className='d-flex gap-2'>
        <Sidebar />
        <div className='menu-container'>
            <NavLink to='/alerts'className='menu-infra menu-meta'>Infra Alerts<h1>&#9742;</h1></NavLink>
            <NavLink to='/entities' className='menu-entities menu-meta'>Entities <h1>&#9817;</h1></NavLink>
            <NavLink to='/home' className='menu-settings menu-meta'>Settings <h1>&#9881;</h1></NavLink>
            <NavLink to='/runbook' className='menu-runbook menu-meta'>RunBook <h1>&#10004;</h1></NavLink>
            <NavLink to='/home' className='menu-runbook menu-meta'>Open Incidents <h1>&#9766;</h1></NavLink>
            <NavLink to='/analytics' className='menu-settings menu-meta'>Analytics <h1>&#9763;</h1></NavLink>
            <NavLink to='/home' className='menu-entities menu-meta'>Heavy Hitters <h1>&#9813;</h1></NavLink>
            <NavLink to='/home' className='menu-infra menu-meta'>Polcies Applied <h1>&#9783;</h1></NavLink>
        </div>
        </div>
    );
}

export default Menu;
