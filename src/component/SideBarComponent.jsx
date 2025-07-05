import React from 'react';
import coffee from '../assets/coffee.svg';
import home from '../assets/home.svg';
import favor from '../assets/favor.svg';
import trendingUp from '../assets/trending-up.svg';
import calendar from '../assets/calendar.svg';
import users from '../assets/users.svg';
import messageCircle from '../assets/message-circle.svg';
import sliders from '../assets/sliders.svg';
import logOut from '../assets/log-out.svg';
import '../style/sidebar-style.css';
import {useLocation, useNavigate} from "react-router-dom";

export default function SideBarComponent() {

    const navigate = useNavigate();

    const location = useLocation();

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <>
            <div className="top-div">
                <div className="logo-text">WATCH</div>
                <img className="logo-coffee" alt="Coffee" src={coffee} />
            </div>

            <div className="nav-left">
                <div className="top-section">
                    <div  className={`nav-item ${isActive('/home') ? 'active-nav' : ''}`} onClick={() => navigate('/home')}>
                        <img className="icon" alt="Home" src={home} />
                        <span className="label">Home</span>
                    </div>
                    <div className="nav-item">
                        <img className="icon" alt="Favourites" src={favor} />
                        <span className="label">Favourites</span>
                    </div>
                    <div className={`nav-item ${isActive('/trending') ? 'active-nav' : ''}`} onClick={() => navigate('/trending')}>
                        <img className="icon" alt="Trending" src={trendingUp} />
                        <span className="label">Trending</span>
                    </div>
                    <div className="nav-item">
                        <img className="icon" alt="Coming soon" src={calendar} />
                        <span className="label">Coming soon</span>
                    </div>
                    <div className="nav-item">
                        <img className="icon" alt="Community" src={users} />
                        <span className="label">Community</span>
                    </div>
                    <div className="nav-item">
                        <img className="icon" alt="Social" src={messageCircle} />
                        <span className="label">Social</span>
                    </div>
                </div>

                <div className="bottom-div">
                    <div className="nav-item">
                        <img className="icon" alt="Settings" src={sliders} />
                        <span className="label">Settings</span>
                    </div>
                    <div className="nav-item">
                        <img className="icon" alt="Logout" src={logOut} />
                        <span className="label">Logout</span>
                    </div>
                </div>
            </div>
        </>
    );
}