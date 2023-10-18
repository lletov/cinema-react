import React from 'react'
import ChooseMovie from './ChooseMovie'
import ChooseTime from './ChooseTime'


export default function Tickets({movies, sessions}) {
  let today = new Date().toISOString().slice(0, 10)
  return (
    <div className='content'>
        <div className='tickets'>
          <h1>Tickets</h1>
          <ChooseMovie movies={movies}/>
          <ChooseTime  sessions={null}/>
          {/* <ChooseSeat /> */}
        List of movies: {movies}
        List of sessions: {sessions}
        </div>
    </div>
  )
}
