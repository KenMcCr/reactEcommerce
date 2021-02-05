import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Cards from "./components/Cards";
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Products' component={Products} />
          <Route path='/Contact' component={Contact} />
          <Cards />
          <Footer />
        </Switch>
      </Router>
    </>

  );
}

export default App;
