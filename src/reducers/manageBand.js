export default function manageBand(state = {
  bands: [],
}, action) {

  switch (action.type) {
    case 'ADD_BAND':
      // return {...state, bands: [...state.bands, action.band]}
      return {...state, bands: state.bands.concat({name: action.band})}

    default:
      return state
  }  
};

// Tests want it to look like this:
// state = {
//   bands: [
//     {name: 'Hello'},
//     {name: 'Matracia'},
//     {name: 'The Moon Baby'}
//   ]
// }

// expect(store.getState().bands[0].name).to.equal("Hello")