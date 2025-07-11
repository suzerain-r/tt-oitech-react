import React, { useEffect, useState } from 'react';
import FilmCard from './FilmCard';
import { fetchImageByImdb, fetchTrendingMovies } from '../api/api';
import heart from '../assets/heart.svg';
import '../style/trending-comp-style.css';
import {useNavigate} from "react-router-dom";
import Loader from './Loader';
import ErrorBannerComponent from "./ErrorBannerComponent";

export default function TrendingComponent() {

    const [movies, setMovies] = useState([]);
    const [topMovie, setTopMovie] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTrending = async () => {
            setLoading(true);
            try {
                const result = await fetchTrendingMovies();
                const withImages = await Promise.all(
                    result.map(async (movie) => {
                        const image = await fetchImageByImdb(movie.imdb_id);
                        return {
                            ...movie,
                            poster: image.poster,
                            fanart: image.fanart,
                        };
                    })
                );
                setTopMovie(withImages[0]);
                setMovies(withImages.slice(1));
            } catch (err) {
                setError('Failed to fetch trending movies.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadTrending();
    }, []);

    const handleSelectFilm = (movie) => {
        navigate(`/movie/${movie.imdb_id}`);
    };


    return (

        <div>
            {loading && <Loader />}
            {error && <ErrorBannerComponent message={error} />}
            {topMovie && (
                <div
                    className="trending-comp"
                    style={{ backgroundImage: `url(${topMovie.fanart})` }}
                >
                    <div className="title-text">{topMovie.title}</div>
                    <p className="year-genre-p">{topMovie.year} | There are genre</p>
                    <button className="trending-watch-btn">Watch now</button>
                    <div className="favorite-button-div">
                        <img className="heart" alt="Heart" src={heart} />
                    </div>
                </div>
            )}

            <div className="trending-list">
                {movies.map((movie) => (
                    <FilmCard
                        key={movie.imdb_id}
                        title={movie.title}
                        year={movie.year.toString()}
                        poster={movie.poster}
                        onClick={() => handleSelectFilm(movie)}
                    />
                ))}
            </div>
        </div>
    );
}