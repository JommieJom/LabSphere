import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Labs from './components/pages/Labs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <switch>
          <Route path='/' exact component={Home} />
          <Route path='/labs-up' component={Labs} />
        </switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
