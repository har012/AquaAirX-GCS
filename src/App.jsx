import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Maps from './components/Maps';
import Plan from './components/Plan';
import Cam from './components/Cam'
import Settings from './pages/Settings';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Topbar />
            {/* <Maps /> */}
            <Cam />
          </>
        } />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;