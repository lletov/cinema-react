import React from 'react'
import TodayTimeline from './TodayTimeline';

export default function MovieCard({movie, i}) {
  if (movie.days.indexOf(i) != -1) {
    const todaySessionsList = movie.sessions[movie.days.indexOf(i)]


    let genreStr = movie.genre.toString().replace(',', ', ')
  
    let maxLength = 160;
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
  
    
    
    return (
      <div className='movie-row'>
          <div className='movie-row-img'><img src={movie.src} alt={movie.title} /></div>
          <div className='movie-row-text'>
            <h2>{movie.title}</h2>
            <div className='movie-row-desc'>
              <p>Year: {movie.year}</p>
              <p>Genre: {genreStr}</p>
              <p>Duration: {movie.duration} min.</p>
              <p>Rating: {movie.rating}/100</p>
              <p>{movie.age}+</p>
            </div>
            <p>{shortDescription}</p>
            <div className='movie-row-sessions'>
              <p>Sessions today: <TodayTimeline timesArray={todaySessionsList}/></p>
              <button className='movie-row-tickets-btn'>TICKETS</button>
            </div>
          </div>
      </div>
    )
  }
 
}
