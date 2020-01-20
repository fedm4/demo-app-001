import React from 'react';
import { BrowserRouter, Switch, Route }  from 'react-router-dom';
import './App.scss';
import MainNav from './components/MainNav/MainNav';
import Users from './pages/Users/Users';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav></MainNav>
        <main id="main">
          <MainHeader></MainHeader>
          <section id="main-content">
            <Switch>
              <Route path="/users" component={Users} />
            </Switch>
          </section>
          <footer id="main-footer"></footer>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
