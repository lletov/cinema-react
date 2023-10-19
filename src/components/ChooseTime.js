import React, { useState } from 'react'
import { movies } from './../movies_data'

export default function ChooseTime({currentMovieInd, selectedMovies, sessions}) {
    const [ind, setInd] = useState()

    function changeInd(i) {
        setInd(i)
    }

    function ChooseTimeButton({ children, isActive, onClick }) {
        if (isActive) {
          return <button className='choose-time-btn active'>{children}</button>
        }
        return (
          <button className='choose-time-btn' onClick={() => {
            onClick();
          }}>
            {children}
          </button>
        )
      }

      

    if (currentMovieInd === null) {

        return (
            <div className='choose-time'>
            <h3>Choose time: {currentMovieInd}</h3> 
            <p style={{marginLeft: '10px', color: 'var(--grey-text)'}}>choose movie first</p>
        </div>
            )
    } else {
    //     const sessionsList = sessions[currentMovieInd].map((s, index) => <ChooseTimeButton 
    //     children={s}
    //     isActive={s.index}
    //     onClick={() => {changeInd(index)}}
    //     />)
        
    //     return (
    //         <div className='choose-time'>
    //             <h3>Choose time:</h3> 
    //             <div>{sessionsList}</div>
    //         </div>
    //     )
    // }
    // const sessionsList = sessions[currentMovieInd].map((s, index) => <ChooseTimeButton 
    //     children={s}
    //     isActive={s.index}
    //     onClick={() => {changeInd(index)}}
    //     />)
    return(<div className='choose-time'>
             <h3>Choose time:</h3> 
            <div>{sessions[currentMovieInd]}</div>
            </div>)
    }
}
