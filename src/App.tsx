import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TrumpPolicies from './pages/TrumpPolicies';
import Inauguration from './pages/Inauguration';
import TrumpQuotes from './pages/TrumpQuotes';
import AboutTrump from './pages/AboutTrump';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutTrump />} />
        <Route path="/about/" element={<AboutTrump />} />
        <Route path="/policies" element={<TrumpPolicies />} />
        <Route path="/policies/" element={<TrumpPolicies />} />
        <Route path="/inauguration" element={<Inauguration />} />
        <Route path="/inauguration/" element={<Inauguration />} />
        <Route path="/quotes" element={<TrumpQuotes />} />
        <Route path="/quotes/" element={<TrumpQuotes />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}