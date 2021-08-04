import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Header from './Layout/Header';
import HomePage from './Pages/HomePage';
import PostsPage from './Pages/PostsPage';
import PostDescriptionPage from './Pages/PostDescriptionPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/posts' exact>
          <PostsPage />
        </Route>
        <Route path='/posts/:id' exact>
          <PostDescriptionPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
