import React from 'react';
import { connect } from 'react-redux'

const ColorController = (props) => {
  return (
    <div>
      <button onClick={() => props.onColorChange('Lightcoral')}>Red</button>
      <button onClick={() => props.onColorChange('Lightgreen')}>Green</button>
      <button onClick={() => props.onColorChange('Lightblue')}>Blue</button>
      <button onClick={() => props.onColorChange('Lightgrey')}>Grey</button>
      <button onClick={() => props.onColorChange('reset')}>Reset</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onColorChange: color => {
      dispatch({
        type: 'BACK_CHANGE',
        color: color
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(ColorController)



// lightgray