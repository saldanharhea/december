import React, {useState} from "react";
import styles from "../styles/Home.module.css";
import {getQueriedDetails} from './api/movie';
import {CardContainer} from "../components";

const Explore = () => {
    const [movieList, setMovieList] = useState([]);

    const fetchMovies = (event) => {
        const value = event.target.value;
        setMovieList([])
        if (value) {
            getQueriedDetails(value).then((response) => {
                setMovieList(response.data);
            });
        }
    }

    return (
        <div className={styles.main}>
            <input placeholder="Search movies, actors, genre..." type="text" className="movie-input"
                   onInput={fetchMovies}/>

            <div className="movie-container">
                {movieList && movieList.length ?
                    movieList.map((movie, index) => {
                        return <CardContainer id={index + 1} key={index} movieItem={movie}/>
                    }) : null}
            </div>

            <style jsx>{`
              .movie-container {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                position: relative;
                top: 5em;
              }

              .movie-input {
                display: block;
                margin-right: auto;
                width: 50vw;
                height: calc(1.5em + .75rem + 2px);
                padding: .375rem .75rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #495057;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                border-radius: .25rem;
              }
            `}
            </style>

        </div>

    )
}

export default Explore