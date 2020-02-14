import React from 'react'
import { connect } from 'react-redux'

const LoadedImage = (props) => {
  return (
    <div className="loaded-image">
      <img className="loaded-image__img" src={props.src} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    src: state.img || state.default_img,
  };
}

export default connect(mapStateToProps)(LoadedImage)
