import React from 'react';
import heart from '../assets/heart.svg';
import '../style/film-card-style.css';

export default function FilmCard({ title, year, poster, onClick }) {
    return (
        <div className="film-card-div" onClick={onClick}>
            <div className="film-card-content-div">
                <div
                    className="card-film-poster"
                    style={{ backgroundImage: `url(${poster})` }}
                >
                    <div className="film-meta">
                        <div className="film-title">{title}</div>
                        <div className="film-year">{year}</div>
                    </div>
                    <div className="favourite-btn">
                        <img className="logo-heart" alt="Heart" src={heart} />
                    </div>
                </div>
            </div>
        </div>
    );
}