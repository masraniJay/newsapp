import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import { News } from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      
        <Router>
        <NavBar/>
        <Routes>
          <Route excat path='/' element={ <News key='general' country='in' pageSize={6} category='general'/> }></Route>
          <Route excat path='/business' element={ <News key='business' country='in' pageSize={6} category='business'/> }></Route>
          <Route excat path='/science' element={ <News key='science' country='in' pageSize={6} category='science'/> }></Route>
          <Route excat path='/entertainment' element={ <News key='entertainment' country='in' pageSize={6} category='entertainment'/> }></Route>
          <Route excat path='/health' element={ <News key='health' country='in' pageSize={6} category='health'/> }></Route>
          <Route excat path='/sports' element={ <News key='sports' country='in' pageSize={6} category='sports'/> }></Route>
          <Route excat path='/technology' element={ <News key='technology' country='in' pageSize={6} category='technology'/> }></Route>
        </Routes>
        </Router>
    
    )
  }
}

