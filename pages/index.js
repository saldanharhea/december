import React, {useEffect, useState} from "react";
import styles from '../styles/Home.module.css';
import {CardList} from '../components';
import {getLatestMovies, getTrendingMovies} from './api/movie';


const Home = () => {
    const [latestMovieList, setLatestMovieList] = useState([]);
    const [trendingMovieList, setTrendingMovieList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const latestList = await getLatestMovies();
            setLatestMovieList(latestList);

            const trendingList = await getTrendingMovies();
            setTrendingMovieList(trendingList)
        };
        fetchData();
    }, []);

    return (
        <div className={styles.main}>
            <CardList title="Latest" movieList={latestMovieList}/>
            <CardList title="Trending" movieList={trendingMovieList}/>
        </div>

    )
}

export default Home