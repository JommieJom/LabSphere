import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home-page/Home';
import Course from './components/pages/Course';
import Labs from './components/pages/Labs';
import LabsSample from './components/pages/LabsSample';
import Footer from './components/Footer';
import SignUp from './components/pages/SignUp';
import CodeEditor from './components/pages/CodeEditor';
import CodeEditor2 from './components/pages/CodeEditor2';
import EditCourse from './components/pages/EditCourse';
import AdminEditor from './components/admin-editor-page/AdminEditor';
import AdminEditor2 from './components/admin-editor-page/AdminEditor2';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <switch>
          <Route path='/' exact component={Home} />
          <Route path='/course-up' component={Course} />
          <Route path='/lab-list' component={Labs} />
          <Route path='/lab-sample' component={LabsSample} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/code-editor/1' component={CodeEditor} />
          <Route path='/code-editor/2' component={CodeEditor2} />
          <Route path='/edit-course' component={EditCourse} />
          <Route path='/question-editor/1' component={AdminEditor} />
          <Route path='/question-editor/2' component={AdminEditor2} />
        </switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
