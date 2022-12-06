import React from 'react';
import './App.css'; 
import SearchMovie from './components/SearchMovie';

const App = () => {

// javascript codes goes here

  return (

    <div   className='container'>
      
      <h1  className='title' id='startShow'>Mansir_Movie_Search</h1>

      <SearchMovie />


    </div>
  )
}

export default App;