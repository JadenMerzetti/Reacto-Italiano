import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

function App() {
  const [activeButton, setActiveButton] = useState('Homepage');

  return (
    <div className="App">
      <Header activeButton={activeButton} setActiveButton={setActiveButton} />
      <MainContent activeButton={activeButton} />
      <Footer />
    </div>
  );
}

export default App;
