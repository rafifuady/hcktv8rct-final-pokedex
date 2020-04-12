import axios from 'axios'

export const fetchPkapi = () => ({
  type: 'FETCHPKAPI'
})

export const fetchPkapiAction = () =>{
  return(dispatch) => {
    dispatch(fetchPkapi())
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => {
      // console.log(res)
      dispatch({
        type: 'FETCH_PKAPI_SUCCESS',
        payload: res.data.results
      })
      // console.log(res.data.results)
    })
    .catch(err => {
      dispatch({
        type: 'FETCH_PKAPI_FAILED'
      })
      throw err
    })
  }
}

export const fetchPokemonName = (params) => {
  return dispatch => {
    console.log(params)
      dispatch({
          type: 'FETCH_PKNAME'
      })
      let link = 'https://pokeapi.co/api/v2/pokemon/'+params
      axios.get(link)
      .then(res => {
          console.log(link + " <===link")
          dispatch({
              type: 'FETCH_PKNAME_SUCCESS',
              payload:res.data,
            })
          console.log(res.data)
          // console.log(res.data.types)
      })
      .catch(err => {
          dispatch({
              type: 'FETCH_PKNAME_FAILED'
          })
          throw err
      })
  }
}

export const updateUrlDetailAction = urlDetail => ({
  type: 'UPDATE_URL_DETAIL',
  payload: urlDetail
})