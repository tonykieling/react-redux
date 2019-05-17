import { combineReducers } from 'redux';

function nameReducer(state = {
                              name: 'Initial Name'
                            }, action) {
console.log("action.name== ", action.name) 
  switch (action.type) {
    case 'NAME_CHANGE':
      return ((action.name) === 'reset' ? 
        {
          name: "Initial Name"
        } :
        {
          name: action.name
        })
      // return {
      //   name: action.name
      // };

    default:
      return state;
  }
}

function colorReducer(state = {
                              color: 'black',
                              backColor: "none"
                            }, action) {
  switch (action.type) {
    case 'COLOR_CHANGE':
      return {
        color: action.color,
        backColor: state.backColor
      };

    case 'BACK_CHANGE' :
      return {
        color: state.color,
        backColor: action.color
      }
    default:
      return state;
  }
}

export default combineReducers({nameData: nameReducer, colorData: colorReducer})
