import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import RaceList from './components/RaceList';
import Footer from './components/Footer';
import EditRace from './components/EditRace';
import CreateRace from './components/CreateRace';
import ShowRace from './components/ShowRace';

function App(){
    return (
      <div>
      <Navbar />
      <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/editrace/:id' component={EditRace} />
      <Route path='/createrace' component={CreateRace} />
      <Route path='/showrace/:id' component={ShowRace} />
      <Route exact path='/racelist' component={RaceList} />
      </Switch>
      <Footer />
      </div>
    );
  }

export default App;
