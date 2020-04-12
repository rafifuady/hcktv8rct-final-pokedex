import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';


// CSS Section
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
//End CSS Section

//Page Section
import Landing from "./pages/Landing";
import About from "./pages/About";
import PokeDex from "./pages/PokeDex";
import Detail from "./pages/Detail";


import reduxStore from './redux/store';


function App() {
  return (
    <React.Fragment>
      <Provider store={reduxStore}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">RF-DEX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Pokedex">PokeDEX</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/About" component={About} />
            <Route path="/Pokedex" component={PokeDex} />
            <Route path="/Detail/:pokeid" component={Detail} />
            <Route component={() => <div>404 Not Found ErrorPage</div>} />
          </Switch>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
