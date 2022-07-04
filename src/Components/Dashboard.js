import React from 'react';
import MainNavBar from './MainNavBar';
import Menu from './Menu';
import Protected from './Protected';

const Dashboard = () => {
    return (
        
        <div>
        <MainNavBar />
        <Protected>
            <Menu />
          </Protected>
        </div>
    );
}

export default Dashboard;
