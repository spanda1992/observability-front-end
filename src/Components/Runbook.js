import React from 'react';
import MainNavBar from './MainNavBar';
import Protected from './Protected';
import Sidebar from './Sidebar';

const Runbook = () => {
    return (
        <Protected>
        <MainNavBar />
        <div className='d-flex gap-2'>
        <Sidebar />
        <object width="100%" height='800px' data="/downloadable/runbook.pdf" type="application/pdf">   </object>
        </div>
        </Protected>
    );
}

export default Runbook;
