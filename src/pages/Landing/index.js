import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

import '../../App'

const Landing = () => {
    return(
      <React.Fragment>
        <Jumbotron>
          <h1>Welcome To RF-PokeDEX</h1>
          <p>
            This is a simple PokeDEX replication by <b>Rafi Fuady</b> for React and React
            React Native Hacktiv8 Class Batch35
          </p>
          <p>
            <Button variant="primary" href="/Pokedex">Pokedex</Button>
          </p>
        </Jumbotron>
      </React.Fragment>
    )
}

export default Landing