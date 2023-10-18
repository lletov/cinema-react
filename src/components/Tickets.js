import React, { useState } from 'react'
import ChooseMovie from './ChooseMovie'
import ChooseTime from './ChooseTime'


export default function Tickets({movies, sessions}) {
  const [currentMovie, setCurrentMovie] = useState()

  function changeCurrentMovie(movieInd){
    setCurrentMovie(movies[movieInd])
  }

  return (
    <div className='content'>
        <div className='tickets'>
          <h1>Tickets</h1>
          <ChooseMovie movies={movies} changeMovie={changeCurrentMovie}/>
          <ChooseTime  sessions={null}/>
          {/* <ChooseSeat /> */}
        List of movies: {movies}
        List of sessions: {sessions}
        </div>
    </div>
  )
}
