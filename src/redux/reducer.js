const appState = {
  pkapiData: {
    loading: false,
    data: [0],
  },
  selectedPkmn: {
    loading: false,
    data: {},
    pic: {},
    types:[],
    abilities:[],
    urlDetail: "https://pokeapi.co/api/v2/pokemon/1/",
  },
};

const app = (state = { ...appState }, action) => {
  switch (action.type) {
    case "FETCH_PKAPI":
      return {
        ...state,
        pkapiData: {
          ...state.pkapiData,
          loading: true,
        },
      };
    case "FETCH_PKAPI_SUCCESS":
      return {
        ...state,
        pkapiData: {
          ...state.pkapiData,
          data: action.payload,
          loading: false,
        },
      };
    case "FETCH_SWAPI_FAILED":
      return {
        ...state,
        pkapiData: {
          ...state.pkapiData,
          loading: false,
        },
      };
    case "FETCH_PKNAME":
      return {
        ...state,
        selectedPkmn: {
          ...state.selectedPkmn,
          loading: true,
        },
      };
    case "FETCH_PKNAME_SUCCESS":
      return {
        ...state,
        selectedPkmn: {
          ...state.selectedPkmn,
          loading: false,
          data: action.payload,
          pic: action.payload.sprites,
          types: action.payload.types,
          abilities: action.payload.abilities,
          // type2: action.payload.types[1].type,
        },
      };
    case "FETCH_PKNAME_FAILED":
      return {
        ...state,
        selectedPkmn: {
          ...state.selectedPkmn,
          loading: false,
        },
      };
    case "UPDATE_URL_PKNAME":
      return {
        ...state,
        selectedPkmn: {
          ...state.selectedPkmn,
          urlDetail: action.payload,
        },
      };
    default:
      return state;
  }
};

export default app;
