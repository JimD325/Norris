import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { About } from './components/about/About';
import { Home } from './components/home/Home'
import { Content } from './components/content/Content';
import { Link } from "react-router-dom";
import { Nav } from './components/Nav/Nav';

import {useState} from 'react';
import './App.css'
function App() {
  const [selectedComponent, setSelectedComponent] = useState('Home')

  

  return (
    <div id="AppContainer">
      <div id= "HeaderContainer">

        <h1 id='Title'>Djavan Norris</h1>
      <img id = "hero" src='https://via.placeholder.com/350x150' alt = "palceholder"></img>
      </div>
      
      <div id="MainContainer">
        <div id="NavContainer">
          <Nav setSelectedComponent = {setSelectedComponent}
          selectedComponent = {selectedComponent}/>
        </div>
        <div id="ComponentContainer">
          {selectedComponent === "About" ? <About/> : selectedComponent === "Content" ? <Content/> : <Home/>}
          
         
          {/* <About/>
      <Content/> */}
        </div>
      </div>


    </div>

  );
}

export default App;
