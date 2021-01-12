import {useEffect, useState} from "react";
import styles from '../../styles/Home.module.css';
import {useRouter} from 'next/router';
import {getMovieDetails} from '../api/movie';

export default function Movie() {
    const router = useRouter()
    const {id} = router.query
    const [movieDetails, setMovieDetails] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const res = await getMovieDetails(id)
            setMovieDetails(res.data)
            console.log(movieDetails)
        };
        fetchData();
    }, []);


    return (
        <div className={styles.container}>
            {movieDetails ?
                <div className={styles.main} style={{padding:0}}>
                    <div style={{backgroundImage: `url(${movieDetails.poster})`}} className={styles.bannerImg}></div>
                    <h1> {movieDetails.title}</h1>
                    <p style={{lineHeight:'1.5em', padding:'0 2em'}}> {movieDetails.overview}</p>
                </div>
                : null}
        </div>
    )
}
