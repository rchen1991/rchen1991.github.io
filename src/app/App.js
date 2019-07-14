import React from 'react';
import Navbar from '../header/Navbar';
import Projects from '../pages/Projects/Projects';
import FoodTravel from '../pages/FoodTravel/FoodTravel';

import { Route, Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Link to="/" className="logo">rc</Link>
        <Navbar />
      </header>
      <div className="app-body">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/food-and-travel" component={FoodTravel} />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;