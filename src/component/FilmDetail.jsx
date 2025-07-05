import React, { useEffect, useState } from 'react';
import heart from '../assets/heart.svg';
import star from '../assets/star.svg';
import { fetchMovieById } from '../api/api';
import '../style/film-detail-style.css';
import {useParams} from "react-router-dom";
import Loader from "./Loader";
import ErrorBannerComponent from "./ErrorBannerComponent";

export default function FilmDetail() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchMovieById(id)
            .then((data) => {
                setMovie({
                    title: data.title,
                    year: data.year ?? 'Unknown year',
                    image: data.fanart,
                    imdb_rating: data.imdb_rating ?? 7,
                    runtime: data.runtime ?? 'Unknown runtime',
                    description: data.description ?? 'No description available',
                });
            })
            .catch((err) => {
                setError('Failed to fetch movie.');
                console.error(err);
            })
            .finally(() => setLoading(false));
    }, [id]);





    return (

        <div className="detail-div">
            {loading && <Loader />}
            {error && <ErrorBannerComponent message={error} />}
            {movie && (
                <div className="film-detail">
                    <img className="detail-film-poster" src={movie.image} alt="Poster" />
                    <div className="film-content">
                        <div className="header">
                            <h2 className="title">{movie.title}</h2>
                            <div className="rating">
                                <img src={star} alt="Star" className="star-icon" />
                                <span className="score">{movie.imdb_rating}/10</span>
                            </div>
                        </div>

                        <div className="meta">
                            <p>
                                {movie.year} | {movie.runtime}
                            </p>
                        </div>

                        <p className="description">{movie.description}</p>

                        <div className="actions">
                            <button className="watch-btn">Watch now</button>
                            <div className="favorite-btn">
                                <img className="heart" alt="Heart" src={heart} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}