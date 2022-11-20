import React from 'react'
import { useNavigate } from 'react-router-dom'

function MovieList(props) {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div>
                <div className='d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt='movie'></img>
                </div>
                </div>
            ))}
        </>
    )
}

export default MovieList