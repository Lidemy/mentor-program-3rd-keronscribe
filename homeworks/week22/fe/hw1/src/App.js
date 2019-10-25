import React from 'react';
import { BrowserRouter as  Router, Route } from 'react-router-dom';
import Header from './header';
import List from './list';
import Post from './post';
import  {About, Home } from './pages';
import './App.css';

function App() {
  
  
  return (
    <div className="App">
      <Header />
      <Route path="/"  exact component={Home} />
      <Route path="/Mentor-React-Blog-2nd"  exact component={Home} />
      <Route path="/list" component={List} />
      <Route path="/about" component={About} />
      <Route path="/posts/:id" component={Post} />
    </div>
  );
}

export default App;
