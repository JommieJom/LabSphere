import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Course from './components/pages/Course';
import Labs from './components/pages/Labs';
import Footer from './components/Footer';
import SignUp from './components/pages/SignUp';
import CodeEditor from './components/pages/CodeEditor';
import EditCourse from './components/pages/EditCourse';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <switch>
          <Route path='/' exact component={Home} />
          <Route path='/course-up' component={Course} />
          <Route path='/lab-list' component={Labs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/code-editor' component={CodeEditor} />
          <Route path='/edit-course' component={EditCourse} />
        </switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
