import React, { useState } from 'react';
import Header from './Header';
import SideBarComponent from './SideBarComponent';
import '../style/main-comp-style.css';
import {Outlet, useNavigate} from "react-router-dom";

export default function MainComponent() {
    const [searchQuery, setSearchQuery] = useState(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const navigate = useNavigate();

    const handleSearch = (query) => {
        setSearchQuery(query);
        navigate('/');
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="back-all">
            {isSidebarOpen && (
                <div className="sidebar-overlay active" onClick={closeSidebar}></div>
            )}

            <div className={`sidebar-div ${isSidebarOpen ? 'active' : ''}`}>
                <SideBarComponent />
            </div>

            <div className="main-content">
                <Header onSearch={handleSearch} onToggleSidebar={toggleSidebar} />
                <Outlet context={{ searchQuery }} />
            </div>
        </div>
    );

}