import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TrumpPolicies from './pages/TrumpPolicies';
import TrumpQuotes from './pages/TrumpQuotes';
import AboutTrump from './pages/AboutTrump';
import Discussions from './pages/Discussions';

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
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/discussions/" element={<Discussions />} />
        <Route path="/discussions/event/:eventTitle" element={<Discussions />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}