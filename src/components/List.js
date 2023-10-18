import React from 'react'
import { useState, useTransition } from 'react';
import MovieCard from './MovieCard'
import {movies} from './../movies_data'


function TabButton({ children, isActive, onClick }) {
  if (isActive) {
    return <button className='tab-button-active'>{children}</button>
  }
  return (
    <button className='tab-button' onClick={() => {
      onClick();
    }}>
      {children}
    </button>
  )
}


function ActiveTab({data, i}) {
  const actualMoviesList = data.map(el => <MovieCard movie={el} i={i}/>)

  return (
      <>
          {actualMoviesList}
      </>
      
  );
}


export default function List() {
    const d = new Date();
    let today = d.getDay();


    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('today');

    function selectTab(nextTab) {
      startTransition(() => {
        setTab(nextTab);      
      });
    }

    return (
      <div className='content'>
          <div className='list'>
            <div className='tab'>
              <TabButton
              isActive={tab === 'today'}
              onClick={() => selectTab('today')}
              children={'TODAY'}
              >
              </TabButton>
              <TabButton
              isActive={tab === 'tomorrow'}
              onClick={() => selectTab('tomorrow')}
              children={'TOMORROW'}
              >
              </TabButton>
            </div>
            <div className='tabcontent'>
                {tab === 'today' && <ActiveTab data={movies} i={today}/>}
                {tab === 'tomorrow' && <ActiveTab data={movies} i={today+1}/>}
            </div>
              {/* <MovieCard movie={movies[0]}/> */}
          </div>
      </div>
    )
  }

// export default function List() {
//   return (
//     <div className='content'>
//         <div className='list'>
//             <h4>List</h4>
//             <MovieCard movie={movies[0]}/>
//         </div>
//     </div>
//   )
// }
