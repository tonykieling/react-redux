import { combineReducers } from 'redux';

function nameReducer(state = {
  name: 'Initial Name'
}, action) {
  switch (action.type) {
    case 'NAME_CHANGE':
      return {
        name: action.name
      };
    default:
      return state;
  }
}

function colorReducer(state = {
  color: 'red'
}, action) {
  switch (action.type) {
    case 'COLOR_CHANGE':
      return {
        color: action.color
      };
    default:
      return state;
  }
}

export default combineReducers({nameData: nameReducer, colorData: colorReducer})
