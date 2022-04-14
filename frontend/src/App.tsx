import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RutineMaker from './pages/RutineMaker/RutineMaker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RutineMaker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
