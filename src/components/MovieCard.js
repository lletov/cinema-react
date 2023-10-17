import React from 'react'

export default function MovieCard({movie}) {
  return (
    <div className={'movie-row'} style={{border: 'solid 1px'}}>
        <img src={movie.src} alt={movie.title} />
        <div className='movie-row-text'>
          <h2>{movie.title}</h2>
          <div className='movie-row-desc'>
            <p>Year: {movie.year}</p>
            <p>Genre: {movie.genre}</p>
            <p>Duration: {movie.duration} min.</p>
            <p>Rating: {movie.rating}</p>
          </div>
          <p>{movie.description}</p>
        </div>
        <div className='movie-row-buttons'>
          <button>Read more!</button>
          <button>Tickets!</button>
        </div>
    </div>
  )
}
