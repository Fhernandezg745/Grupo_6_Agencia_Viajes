import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';

function App() {
  return (
    <div>
    <h1>DASHBOARD HARBOR TRIP</h1>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
