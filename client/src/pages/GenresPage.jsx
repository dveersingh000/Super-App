import React, { useContext, useState, useEffect } from 'react'
import styles from './GenresPage.module.css';
import defaultGenres from '../data/genres';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const GenresPage = () => {
    const [error, setError] = useState(false);
    const {selectedGenres, setSelectedGenres} = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(selectedGenres.length >=3){
            setError(false);
        }
    },[selectedGenres])

    const handleSelectedGenre = (genre) => {
        if(selectedGenres.includes(genre)){
            setSelectedGenres(
                selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
            );
        }else {
            setSelectedGenres([...selectedGenres, genre]);
        }
    }


    const handleNext = () => {
        if(selectedGenres.length < 3){
            setError(true);
        }else{
            navigate('/carousel')
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h3 className={styles.heading}>Super App</h3>
            <h2 className={styles.subHeading}>Choose your entertainment category</h2>
            <div className={styles.selectedGenres}>
                {selectedGenres.map((genre, index) =>( 
                    <div key={index} className={styles.selectedGenre} onClick={() => {handleSelectedGenre(genre)}}>{genre}</div>
                ))}
            </div>
            {error && <p className={styles.error}>Minimum 3 category required</p>}
        </div>
        <div className={styles.right}>
            <div className={styles.genres}>
                {defaultGenres.map((genre, index) => (
                <div className={styles.genre} key={index} onClick={() => {handleSelectedGenre(genre)}}>{genre}</div>
            ))}
            </div>
            <button onClick={handleNext}>Next Page</button> 
        </div>
    </div>
  )
}

export default GenresPage