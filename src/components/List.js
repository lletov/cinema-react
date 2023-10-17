import React from 'react'
import MovieCard from './MovieCard'
import {movies} from './../movies_data'

export default function List() {
  return (
    <div className='content'>
        <div className='list'>
            <h4>List</h4>
            <MovieCard movie={movies[0]}/>
        </div>
    </div>
  )
}
