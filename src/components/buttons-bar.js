import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

const ButtonsBar = (props) => {
  return (
    <div className="buttons-bar">
      <button onClick={props.getImg} className="btn btn-lg btn-primary"> GET IMG </button>
      <button onClick={props.defaultImg} className="btn btn-lg btn-secondary"> DEFAULT VAL. </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getImg: () => {
    //   fetch('https://dog.ceo/api/breeds/image/random')
	  //    .then(response => response.json())
	  //     .then(result => dispatch(actions.getImg(result.message)))
    // },
    getImg: () => dispatch({ type: "GET_NEW_IMG" }),
    defaultImg: () => dispatch({ type: "DEFAULT" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsBar)
