import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TrumpPolicies from './pages/TrumpPolicies';
import TrumpQuotes from './pages/TrumpQuotes';
import AboutTrump from './pages/AboutTrump';
import TrumpTermCountdown from './pages/TrumpTermCountdown';
import TrumpSpeeches from './pages/TrumpSpeeches';
import Inauguration from './pages/Inauguration';
import President47 from './pages/President47';
import TrumpDie from './pages/TrumpDie';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutTrump />} />
        <Route path="/about/" element={<AboutTrump />} />
        <Route path="/policies" element={<TrumpPolicies />} />
        <Route path="/policies/" element={<TrumpPolicies />} />
        <Route path="/quotes" element={<TrumpQuotes />} />
        <Route path="/quotes/" element={<TrumpQuotes />} />
        <Route path="/term-countdown" element={<TrumpTermCountdown />} />
        <Route path="/term-countdown/" element={<TrumpTermCountdown />} />
        <Route path="/speeches" element={<TrumpSpeeches />} />
        <Route path="/speeches/" element={<TrumpSpeeches />} />
        <Route path="/inauguration" element={<Inauguration />} />
        <Route path="/inauguration/" element={<Inauguration />} />
        <Route path="/president47" element={<President47 />} />
        <Route path="/president47/" element={<President47 />} />
        <Route path="/trump-die" element={<TrumpDie />} />
        <Route path="/trump-die/" element={<TrumpDie />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}