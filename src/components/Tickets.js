import React from 'react'

export default function Tickets({actual_movies}) {
  return (
    <div className='content'>
        <div className='tickets'>
        List of movies: {actual_movies}
        </div>
    </div>
  )
}
