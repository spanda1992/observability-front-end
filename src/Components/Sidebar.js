import React from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    image
} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';

import { FaList, FaRegHeart } from "react-icons/fa";
import { AiFillBell , AiFillAndroid , AiFillDashboard , AiOutlineBook} from "react-icons/ai";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../Styles/sidebar.css'

const Sidebar = () => {

    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    //../../public/downloadable/background-image-2

    return (
        <div id='sidebar-observability'>
            <ProSidebar collapsed={menuCollapse}>

                <SidebarHeader>
                    <div className="logotext">
                        {/* small and big change using menucollapse state */}
                        <p>{menuCollapse ? "Actions" : "Action Items"}</p>
                    </div>
                    <div className="closemenu" onClick={menuIconClick}>
                        {/* changing menu collapse icon on click */}
                        {menuCollapse ? (
                            <FiArrowRightCircle />
                        ) : (
                            <FiArrowLeftCircle />
                        )}
                    </div>
                </SidebarHeader>

                <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem  icon={<FaList />}>Dashboard
                        <Link to='/home'></Link>
                    </MenuItem>
                    <MenuItem icon={<AiFillBell />}>Infra Alerts
                        <Link to='/alerts'></Link>
                    </MenuItem>
                    <MenuItem icon = {<AiFillAndroid />}>Entities
                        <Link to='/entities'></Link>
                    </MenuItem>
                    <MenuItem icon={<AiFillDashboard />}>Analytics
                        <Link to='/analytics'></Link>
                    </MenuItem>
                    <MenuItem icon={<AiOutlineBook />}>Rubook
                        <Link to='/runbook'></Link>
                    </MenuItem>
                </Menu>
                </SidebarContent>

                <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
            </ProSidebar>;
        </div>
    );
}

export default Sidebar;
