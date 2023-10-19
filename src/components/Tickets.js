import React, { useState } from 'react'
import ChooseMovie from './ChooseMovie'
import ChooseTime from './ChooseTime'


export default function Tickets({movies, sessions}) {
  const [currentMovie, setCurrentMovie] = useState(null)

  function changeCurrentMovie(i){
    setCurrentMovie(i)
  }

  return (
    <div className='content'>
        <div className='tickets'>
          <h1>Tickets {currentMovie}</h1>
          <ChooseMovie movies={movies} changeMovie={changeCurrentMovie}/>
          <ChooseTime  currentMovieInd={currentMovie} selectedMovies={movies} sessions={sessions}/>
          {/* <ChooseSeat /> */}
        List of movies: {movies}
        List of sessions: {sessions}
        </div>
    </div>
  )
}
