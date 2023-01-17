import React, { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Erreur from './Erreur';
import NavBars from './Components/NavBars';
import { moviesData } from './Components/Data/Data';
import Descriptioon from './Descriptioon';

function App() {


//const [show, setShow] = useState(false);
const [movies, setMovies] = useState(moviesData);
  return (
    <div className="App">
      
     

<NavBars/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route  path='*' element={<Erreur/>} />
        <Route  path="/description/:movieId" element={<Descriptioon movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
