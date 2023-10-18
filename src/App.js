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
  for (let i = 0; i <movies.length; i++) {
    if (movies[i].days.indexOf(today) !== -1) {
      todayMoviesList.push(<li>{movies[i].title}</li>)
    }
  }

  const [day, setDay] = useState('None')
  const [moviesList, setMoviesList] = useState(todayMoviesList)

  function handleDayChange(n) {
    setDay(n)
    if (n === 'today') {
      setMoviesList(actualDayData(today))
    }
    if (n === 'tomorrow') {
      setMoviesList(actualDayData(today+1))
    }
  }

  function actualDayData(n){
    let todayMoviesList = []
    for (let i = 0; i <movies.length; i++) {
      if (movies[i].days.indexOf(n) !== -1) {
        todayMoviesList.push(<li>{movies[i].title}</li>)
      }
    }
    return todayMoviesList
  }

  return (
    <>
    <Banner />
    <List change={handleDayChange}/>
    <Tickets actual_movies={moviesList} />
    </>
  );
}

export default App;
