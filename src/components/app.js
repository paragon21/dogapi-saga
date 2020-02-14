import React, { Component } from 'react';
import LoadedImage from './loaded-image'
import ButtonsBar from './buttons-bar'

export default class App extends Component {

  render() {
    return (
      <div className="contaiter box">
        <LoadedImage />
        <ButtonsBar />
      </div>
    );
  }
}
