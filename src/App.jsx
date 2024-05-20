// src/App.jsx
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Curriculum from './Components/Curriculum';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Overview from './Components/Overview';
import Refund from './Components/Refund';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
        <Router>
          <Route path="/overview" component={Overview} />
          <Route path="/curriculum" component={Curriculum} />
          <Route path="/refund" component={Refund} />
          <Route path="/testimonials" component={Testimonials} />
        </Router>
      </div>
    </BrowserRouter>
  );
}

export default App;
