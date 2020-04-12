import React from "react";
import {connect} from 'react-redux'
// import { useParams} from "react-router-dom";
import { fetchPkapiAction, fetchPokemonName } from '../../redux/action';
import { Card, Container, ListGroup,ListGroupItem, Button, Row, Col } from "react-bootstrap";


class Detail extends React.Component{
componentDidMount() {
    //fetch API 
    this.props.fetchPokemonName(this.props.match.params.pokeid)
    console.log(this.props)
}



render() {
  const { selectedPkmn, pic,types, abilities } = this.props
  // const [ability] = abilities
// ability: state.selectedPkmn.ability,
// console.log(abilities)
  // const { front_default } = selectedPkmn.sprites
  // const {selectedPkmnpic} = selectedPkmn.sprites
  return(
    <React.Fragment>
      <div>
        <Container>
          
          <Card>
            <Col className="text-center">
              <img src={pic.front_default} className="card-img" alt="pic" style={{width:"7em"}}></img>
            </Col>
            <Card.Header className="text-capitalize">
              <Row>
                <Col xs={10}>
                  <b>{selectedPkmn.name}</b>
                </Col>
                <Col>
                  <b className="text-right">&nbsp;{"#"+selectedPkmn.order}</b> 
                </Col>
              </Row>
            </Card.Header>
            <ListGroupItem>
              <Row>
                <Col className="text-center">
                  <b>Abilities</b>
                </Col>
              </Row>
              <Row>
                {
                  this.props.abilities.map(data => {
                    return(
                      <Col className="text-center">
                        <Button variant="secondary" className="text-capitalize">{data.ability.name}</Button> 
                        
                      </Col>
                    )
                  })
                }
            </Row>
            </ListGroupItem>
            <ListGroup className="list-group-flush">
              
              <ListGroupItem>
                <Row>
                  <Col className="text-center">
                    <b>Type</b> 
                  </Col>
                </Row>
                <Row>
                {
                  this.props.types.map(data => {
                    switch (data.type.name) {
                      case 'normal':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#aa9",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'fire':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#f42",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'water':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#39f",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'electric':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#fc3",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'grass':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#7c5",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'ice':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#6cf",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'fighting':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColora:"#b54",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'poison':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#a59",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'ground':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#db5",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'flying':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#89f",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'psychic':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#f59",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'bug':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#ab2",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'rock':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#ba6",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'ghost':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#66b",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'dragon':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#76e",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'dark':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#754",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'steel':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#aab",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      case 'fairy':
                        return(
                            <Col className="text-center">
                              <Button 
                                className="text-uppercase" 
                                style={{width:"7em",backgroundColor:"#e9e",color:"white"}}>
                                {data.type.name}
                              </Button>
                            </Col>
                        );
                      default:
                        return(<div></div>);
                    }
                  })
                }
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col className="text-center">
                    <b>Height:</b> 
                  </Col>
                  <Col className="text-center">
                    <b>Weight:</b> 
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    {selectedPkmn.height/10} Meters
                  </Col>
                  <Col className="text-center">
                    {selectedPkmn.weight/10} Kg
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
            <Card.Text>
              {/* <p>Metascore: {selectedOmdb.Metascore}</p>
              <p>IMDB Rating:{selectedOmdb.imdbRating}</p> */}
              
            </Card.Text>
          </Card>
        </Container>
        
        
      </div>
    </React.Fragment>
  )
}

}
const mapStateToProps = state => ({
pkapiData: state.pkapiData.data,
loadingProfile: state.selectedPkmn.loading,
selectedPkmn: state.selectedPkmn.data,
urlDetail: state.selectedPkmn.urlDetail,
pic: state.selectedPkmn.pic,
types: state.selectedPkmn.types,
abilities: state.selectedPkmn.abilities
})

const mapDispatchToProps = {
  fetchPkapiAction,
  fetchPokemonName

}
export default connect (mapStateToProps, mapDispatchToProps)(Detail)
