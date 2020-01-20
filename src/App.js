import React from 'react';
import { BrowserRouter }  from 'react-router-dom';
import './App.scss';
import MainNav from './components/MainNav/MainNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav></MainNav>
        <main id="main">
          <header id="main-header"></header>
          <section id="main-content"></section>
          <footer id="main-footer"></footer>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
