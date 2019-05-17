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
  color: 'red',
  backColor: "lightgrey"
}, action) {
  switch (action.type) {
    case 'COLOR_CHANGE':
      return {
        color: action.color,
        backColor: state.backColor
      };
      //NEW
      case 'BACK_CHANGE' :
      return {
        color: state.color,
        backColor: action.color
      }
      // /New
    default:
      return state;
  }
}

// colorBackReducer(state = { color = "lightgray"}, action) {

// }

export default combineReducers({nameData: nameReducer, colorData: colorReducer})
