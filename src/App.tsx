import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Team from './components/Team';
import About from './components/About';
import Events from './components/Events';
import Projects from './components/Projects';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-violet-900 via-pink-800 to-blue-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/joinus" element={<JoinUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;