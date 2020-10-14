import React from 'react';
import './styles/App.scss';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import Home from './pages/Home/Home';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faChevronCircleUp, faCode } from "@fortawesome/free-solid-svg-icons";
// library.add(fab, faChevronCircleUp, faCode);

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>

      <Route exact path="/" component={Home} />
      {/* <Route path="/graph" component={Graph} />
      <Route path="/about" component={About} /> */}
      </Switch>
      <Footer />

      {/* <FontAwesomeIcon icon={faChevronCircleUp} size="3x" /> */}

    </div>
    </Router>
  );
}

export default App;
