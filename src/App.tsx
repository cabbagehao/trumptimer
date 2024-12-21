import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import TrumpPolicies from './pages/TrumpPolicies';
import Inauguration from './pages/Inauguration';
import TrumpQuotes from './pages/TrumpQuotes';
import AboutTrump from './pages/AboutTrump';
import TrumpSpeeches from './pages/TrumpSpeeches';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home route with trailing slash */}
        <Route path="/" element={<Home />} />
        
        {/* Content routes with trailing slashes */}
        <Route path="/about/" element={<AboutTrump />} />
        <Route path="/policies/" element={<TrumpPolicies />} />
        <Route path="/speeches/" element={<TrumpSpeeches />} />
        <Route path="/inauguration/" element={<Inauguration />} />
        <Route path="/quotes/" element={<TrumpQuotes />} />
        
        {/* Redirect routes without trailing slash to trailing slash */}
        <Route path="/about" element={<Navigate to="/about/" replace />} />
        <Route path="/policies" element={<Navigate to="/policies/" replace />} />
        <Route path="/speeches" element={<Navigate to="/speeches/" replace />} />
        <Route path="/inauguration" element={<Navigate to="/inauguration/" replace />} />
        <Route path="/quotes" element={<Navigate to="/quotes/" replace />} />
        
        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}