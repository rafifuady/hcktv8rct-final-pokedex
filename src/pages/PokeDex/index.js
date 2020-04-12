import React from "react";
import {connect} from 'react-redux'
import { fetchPkapiAction, fetchPokemonName,updateUrlDetailAction } from '../../redux/action';
import { Button } from "react-bootstrap";

class PokeDex extends React.Component{
componentDidMount() {
    //fetch API poke
    this.props.fetchPkapiAction()
    // console.log(pkapiData)

}

selectPkmn = (urlDetail) => {
  // console.log(urlDetail)
  this.props.fetchPokemonName(urlDetail)
  this.props.history.push(`/Detail/${urlDetail}`)
}

render() {
  return(
    <React.Fragment>
      <table className="table">
        <thead>
            <tr>
                <th># </th>
                <th>Name: </th>
                <th>Actions</th>
            </tr>
        </thead>
      {
          this.props.pkapiData.map((data,index) => {
              return (
                        <tbody>
                            <tr>
                                <td>
                                  {index+1}
                                </td>
                                <td>
                                    <p className="text-capitalize">{data.name}</p>
                                </td>
                                <td>
                                <Button onClick={()=> this.selectPkmn(data.name)}>Detail</Button>
                                {/* <Link to={'/Detail/'+data.name} children={Detail}>Detail</Link> */}
                                </td>
                            </tr>
                        </tbody>
              )
          })
      }
      </table>
    </React.Fragment>
  )
}

}
const mapStateToProps = state => ({
pkapiData: state.pkapiData.data,
// loadingProfile: state.selectPkmn.loading,
selectedPkmn: state.selectedPkmn.data,
urlDetail: state.selectedPkmn.urlDetail

})

const mapDispatchToProps = {
fetchPkapiAction,
fetchPokemonName,
updateUrlDetailAction

}
export default connect (mapStateToProps, mapDispatchToProps)(PokeDex)
