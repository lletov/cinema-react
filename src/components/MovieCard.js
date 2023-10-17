import React from 'react'
import TodayTimeline from './TodayTimeline';

export default function MovieCard({movie}) {

  let genreStr = movie.genre.toString().replace(',', ', ')

  let maxLength = 200;
  let shortDescription;
  if (movie.description.length > maxLength) {
    let cutStr = movie.description.substring(0, maxLength);
    let words = cutStr.split(' ');
    words.pop()
    let lastWord = words[words.length -1].replace(',', '') // remove ',' if it last token in str
    words.pop()
    words.push(lastWord)
    shortDescription = words.join(' ')
    shortDescription += ' ...'
  } else {
    shortDescription = movie.description
  }

  const d = new Date();
  let today = d.getDay();
  const todaySessionsList = movie.sessions[movie.days.indexOf(today)]
  

  return (
    <div className={'movie-row'} style={{border: 'solid 1px'}}>
        <img src={movie.src} alt={movie.title} />
        <div className='movie-row-text'>
          <h2>{movie.title}</h2>
          <div className='movie-row-desc'>
            <p>Year: {movie.year}</p>
            <p>Genre: {genreStr}</p>
            <p>Duration: {movie.duration} min.</p>
            <p>Rating: {movie.rating}</p>
          </div>
          <p>{shortDescription}</p>
          <div className='movie-row-sessions'>
            <p>Sessions today: <TodayTimeline timesArray={todaySessionsList}/></p>
            <button className='movie-row-tickets-btn'>Tickets</button>
          </div>
        </div>
    </div>
  )
}
