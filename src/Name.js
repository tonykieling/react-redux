import React, { Component } from 'react';
import { connect } from 'react-redux'

class Name extends Component {
  render() {
    return (
      <div id="tLabel" style={{marginTop: 50, marginBottom: 20}}>
        <span style={{color: this.props.color, background: this.props.backColor, fontSize: 40}}>
          {this.props.name}
        </span>
      </div>)
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    name: state.nameData.name,
    color: state.colorData.color,
    backColor: state.colorData.backColor
  }
}

export default connect(mapStateToProps, null)(Name)
