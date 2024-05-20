import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Curriculum from './Components/curriculum/Curriculum';
import Header from './Components/header/Header';
import Navbar from './Components/navbar/Navbar';
import Overview from './Components/overview/Overview';
import Refund from './Components/refund/Refund';
import Testimonials from './Components/testimonials/Testimonials';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
