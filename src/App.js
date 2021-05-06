import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
