import React, { useState } from 'react'

export default function ChooseMovie({movies, changeMovie}) {
    const [ind, setInd] = useState()

    function changeInd(i) {
        setInd(i)
        changeMovie(i)

    }

    function ChooseMovieButton({ children, isActive, onClick }) {
        if (isActive) {
          return <button className='choose-movie-btn active'>{children}</button>
        }
        return (
          <button className='choose-movie-btn' onClick={() => {
            onClick();
          }}>
            {children}
          </button>
        )
      }

    function movieSelect(el){
      if (el.className === 'choose-movie-btn') {
        el.s
      }
      
    }
    // const moviesList = movies.map(m => <button className='choose-movie-btn' onClick={() => {changeInd('dr'), className='choose-movie-btn active'}}>{m}</button>)
    const moviesList = movies.map((m, index) => <ChooseMovieButton 
        children={m}
        isActive={m.index}
        // onClick={() => {changeInd(index)}}
        onClick={() => movieSelect(this)}
        />)
    return (
        <div className='choose-movie'>
            <h3>Choose movie:</h3>
            <div>{moviesList}</div>
            <p>{ind}</p>
        </div>
  )
}
