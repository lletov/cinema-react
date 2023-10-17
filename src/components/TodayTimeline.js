import React from 'react'

export default function TodayTimeline({timesArray}) {
  const list = timesArray.map(el => <p className='time'>{el}</p>)
  return (
    <div className='times-today-row'>{list}</div>
  )
}
