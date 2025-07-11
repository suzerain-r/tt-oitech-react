import React, { useState } from 'react';
import bell from '../assets/bell.svg';
import ellipse757 from '../assets/ellipse-757.svg';
import search from '../assets/search.svg';
import '../style/header-style.css';

export default function Header({ onSearch, onToggleSidebar, isSidebarOpen }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (searchQuery) {
            onSearch(searchQuery);
            setSearchQuery('');
        }
    };

    return (


        <div className="header-div">

            <div className={`hamburger ${isSidebarOpen ? 'hidden' : ''}`} onClick={onToggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="left-div">
                <div className="nav-item">Movies</div>
                <div className="nav-item">Series</div>
                <div className="nav-item">Documentaries</div>
            </div>

            <div className="right-div">
                <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                    placeholder="Search..."
                />
                <img className="icon" alt="Search" src={search} onClick={
                    handleSearch
                } />
                <img className="icon" alt="Bell" src={bell} />
                <div className="right-user-div">
                    <img className="avatar" alt="User avatar" src={ellipse757} />
                    <div className="username">Tetiana</div>
                </div>
            </div>
        </div>
    );
}