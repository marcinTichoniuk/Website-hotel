import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Castles from './pages/Castles';
import SingleCastle from './pages/SingleCastle';
import ErrorPage from './pages/ErrorPage';

import './css/main.css';

function App() {
  return (
    <div className="wrap">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/castles" component={Castles} />
        <Route exact path="/castles/:id" component={SingleCastle} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
