import React from 'react'

export default function ChooseMovie({movies}) {
    const moviesList = movies.map(m => <button className='choose-movie-btn'>{m}</button>)
    return (
        <div className='choose-movie'>
            <h3>Choose movie:</h3>
            <div>{moviesList}</div>
        </div>
  )
}
