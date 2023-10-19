import './style.css'
import Banner from './components/Banner';
import List from './components/List';
import Tickets from './components/Tickets';
import { useState } from 'react';
import { movies } from './movies_data';

function App() {
  const d = new Date();
  let today = d.getDay();

  let todayMoviesList = []
  let todaySessionsList = []
  for (let i = 0; i <movies.length; i++) {
    if (movies[i].days.indexOf(today) !== -1) {
      todayMoviesList.push(movies[i].title)
      todaySessionsList.push(movies[i].sessions[movies[i].days.indexOf(today)])
    }
  }

  const [day, setDay] = useState('None')
  const [moviesList, setMoviesList] = useState(todayMoviesList)
  const [sessionsList, setSessionsList] = useState(todaySessionsList)

  function handleDayChange(n) {
    setDay(n)
    if (n === 'today') {
      setMoviesList(actualDayData(today)[0])
      setSessionsList(actualDayData(today)[1])
    }
    if (n === 'tomorrow') {
      setMoviesList(actualDayData(today+1)[0])
      setSessionsList(actualDayData(today+1)[1])
    }
  }

  function actualDayData(n){
    let todayMoviesList = []
    let todaySessionsList = []
    for (let i = 0; i <movies.length; i++) {
      if (movies[i].days.indexOf(n) !== -1) {
        todayMoviesList.push(<p>{movies[i].title}</p>)
        todaySessionsList.push(<>{movies[i].sessions[movies[i].days.indexOf(n)]}</>)
      }
    }
    return( [todayMoviesList, todaySessionsList])
  }

  return (
    <>
    <Banner />
    <List change={handleDayChange}/>
    <Tickets movies={moviesList} sessions={sessionsList}/>
    </>
  );
}

export default App;
